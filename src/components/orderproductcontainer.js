import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from "../actions/index";
import Modal from '@material-ui/core/Modal';
import { NavLink } from 'react-router-dom';
import logo from '../css/assets/whitelogo.png';
import back from '../css/assets/icon-left@3x.png';
import Popper from './popper.js'


class ProductContainer extends React.Component {

      state = {
      open: false,
      numordered: 0,
      selectedProducts: [],
      cart: []
    };

    handleOpen = (e) => {
        let products = e.target.dataset.user
        let product = parseInt(products)
        this.setState({ open: true, selectedProducts: product });

    };

    handleOrderChanges = event => {
      let product = event.target.dataset.product

      console.log(product)
      this.setState({
        numordered: this.state.numordered < this.props.location.state.numpicked ? this.state.numordered + 1 : this.state.numordered,
        cart: this.state.numordered === this.props.location.state.numpicked ? [...this.state.cart] : [...this.state.cart, product]
      }, () => console.log(this.state))
  }

      handleCountDown = event => {
      let id = event.target.dataset.id
      let cart = [...this.state.cart]
      cart.splice(id, 1)
      this.setState({
        numordered:   this.state.numordered > 0 ? this.state.numordered - 1 : this.state.numordered,
          cart:  cart
      }, () =>  console.log(this.state))
  }



    handleClose = () => {
      this.setState({ open: false, selectedProducts: [] });
    };


    componentDidMount() {
      this.props.dispatch(fetchProducts())
    }


  render () {
      if (this.props.loading) {
        return <div className="prepping-juicing-pouring"> Prepping... Juicing... Pouring...</div>;
      }

    return (
      <div>
        <div className="order-navbar">
          <NavLink
            className="nav-button browse"
            to="/started">  <img src={back} className="back-button" alt="logo" /></NavLink>
          <NavLink
              className="home-name" to="/"> <img src={logo} className="white-logo" alt="logo" /> </NavLink>
            <p className="count-boxes"> {this.state.numordered} / {this.props.location.state.numpicked}
               <Popper ordered={this.state.numordered} picked={this.props.location.state.numpicked } cart={this.state.cart} handleCountDown={this.handleCountDown} handleUpdate={this.handleOrderChanges}/></p>

      </div>
        <h1 className="product-header"> All Products</h1>
        <ul className="product-container">
        {this.props.products.map(product =>
          <div className="product-div" key={product.id}>
           <img src={product.image_url} className="product-images" alt="logo" />
           <p className="home-name">{product.name}</p>
             <div>
               <p data-user={product.id} className="smoothie-details" onClick={this.handleOpen}>  {product.kind} Details</p>
            </div>
           <button className="add-to-cart" data-image={product.image_url} data-id={product.id} data-product={product.name} onClick={this.handleOrderChanges}> Add to cart </button>
          </div>
       )}
       {this.state.open ?         <Modal
                className="modal-container"
               open={this.state.open}
               onClose={this.handleClose}
             >
               <div className="modal-containers">
                   {this.props.products.filter(product => {
                     return parseInt(product.id) === parseInt(this.state.selectedProducts)}).map(product =>
                       <div className="" key={product.id}>
                              <div  className="individual-p-infos">
                                <p className="individual-p-name">{product.name}</p>
                                <p className="individual-p-kind">{product.kind}</p>
                                <p className="individual-p-tag">{product.tagline}</p>
                                <p className="individual-p-kind">{product.description}</p>
                                <p className="individual-p-tag">Ingredients</p>
                                <p className="individual-p-kind">{product.ingredients}</p>
                              </div>
                            </div>
                       )
                 }
               </div>
             </Modal>  : null }

           </ul>
      </div>
    )
  }
}

  const mapStateToProps = state => ({
    products: state.items,
    loading: state.loading
  });


export default connect(mapStateToProps)(ProductContainer);
