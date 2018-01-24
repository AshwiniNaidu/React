import React, {Component} from "react"
import {connect} from "react-redux"

class CartItems extends Component {
    
    totalAmount = () => {
        let t = 0;
        for(let e of this.props.cartItems) {
            t += (e.price * e.quantity);
        }
        return t;
    }
    render() {
        let items = null;
        if(this.props.cartItems.length > 0) {
            items = this.props.cartItems.map( (item) => {
                
                return <tr key={item.id}>
                    <td>
                        <button className="btn btn-danger btn-xs" onClick={() => {this.props.removeFromCart(item)}}>X</button> {item.name}
                    </td>
                    <td>{item.price}</td>
                    <td>{item.quantity} 
                    &nbsp;
                    <button className="btn btn-info" onClick={()=> {this.props.incQuantity(item)}}>+</button>
                    &nbsp;
                    <button className="btn btn-info" onClick={()=> {this.props.decQuantity(item)}}>-</button>
                    </td>
                    <td>{item.price * item.quantity}</td>   
                </tr>
            }); 
        } else {
            items = <tr><td colSpan="4">No Items Added</td></tr>
        }
        return (
        <div>
            <h4> Cart Items &nbsp;
                <span className="label label-primary">  {this.props.cartItems.length}</span>
            </h4>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                    {items}
                    <tr>
                        <td colSpan="3">Total Amount</td>
                        <td>{this.totalAmount()}</td>
                    </tr>
                </tbody>
            </table>
         </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cartItems: state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (item) => {
            let removedItem = {
                id: item.id,
                name: item.name,
                price: item.price
            }
            dispatch({type: "REMOVE_FROM_CART", payload: removedItem})
        },
        incQuantity: (item) => {
            let updated = {
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity + 1
            }
            dispatch({type: "INCREASE_QTY", payload: updated})
        },
        decQuantity: (item) => {
            let updated = {
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity - 1
            }
            dispatch({type: "DECREASE_QTY", payload: updated})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CartItems)