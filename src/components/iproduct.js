import React from 'react'
import Navbar from './navbar'
import { connect } from 'react-redux'

class Iproduct extends React.Component {





  render () {
    return (
      <div>
        <Navbar />
        {this.props.products.filter(product => {
          return product.id === this.props.location.state.selectedProduct}).map(function (product) {
          return <div className="individual-container" key={product.id}>
                  <img src={product.image_url} className="ind-product-img" alt="logo" />
                  <div  className="individual-p-info">
                    <p className="individual-p-name">{product.name}</p>
                    <p className="individual-p-kind">{product.kind}</p>
                    <p className="individual-p-tag">{product.tagline}</p>
                    <p className="individual-p-kind">{product.description}</p>
                    <p className="individual-p-tag">Ingredients</p>
                    <p className="individual-p-kind">{product.ingredients}</p>
                  </div>
                </div>}) }

      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.items
});

export default connect(mapStateToProps)(Iproduct);
