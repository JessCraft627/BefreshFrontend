import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from "../actions/index";


class ProductContainer extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProducts())
  }

  render () {


      if (this.props.loading) {
        return <div className="prepping-juicing-pouring"> Prepping... Juicing... Pouring...</div>;
      }

    return (
      <div>
        <h1 className="product-header"> All Products</h1>
        <ul className="product-container">
        {this.props.products.map(product =>
          <div className="product-div" key={product.id}>
           <img src={product.image_url} className="product-images" alt="logo" />
           <p className="home-name">{product.name}</p>
           <p className="smoothie-details"> {product.kind} Details</p>
           <button className="add-to-cart" onClick={this.props.handleChange}> Add to cart </button>
          </div>

       )}
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
