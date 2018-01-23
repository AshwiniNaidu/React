import React, {Component} from "react"

export default class CartItems extends Component {
    render() {
        return (
        <div>
            <h4> Cart Items </h4>
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
                </tbody>
            </table>
         </div>
        )
    }
}