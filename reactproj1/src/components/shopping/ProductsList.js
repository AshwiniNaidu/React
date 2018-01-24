import React, {Component} from "react"
import {connect} from "react-redux"

class ProductsList extends Component {
    render() {
        let listOfProducts = null;
        if(this.props.products.length > 0) {
            listOfProducts = this.props.products.map( (product) => {
                return <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td><button className="btn btn-primary" onClick={() => {this.props.addToCart(product)}}>Add to Cart</button></td>
                </tr>
            });

        } else {
            listOfProducts = <tr><td colSpan="3">No Data Available</td></tr>
        }

        return (
        <div>
            <h4> List of Products</h4>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {listOfProducts}
                </tbody>
            </table>
         </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.productsReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => {
            let orderedItem = {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            }
            dispatch({type: "ADD_TO_CART", payload: orderedItem})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsList)