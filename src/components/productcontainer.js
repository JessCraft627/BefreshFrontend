import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchProducts } from "../actions/index";
import gif from '../css/assets/giphy.gif';



class ProductContainer extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render () {
    console.log(this.props.products)

      if (this.props.loading) {
        return <img src={gif} className="smoothie-gif" alt="logo" />;
      }

    return (
      <div>
        <Navbar />
        <ul>
        {this.props.products.map(product =>
          <div key={product.id}>
           <img src={product.image_url} className="App-logo" alt="logo" />
           <p>{product.name}</p>
            <p> {product.kind}</p>
            <Link
              to={{
                pathname: "/product",
              }}
            > Details </Link>
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
