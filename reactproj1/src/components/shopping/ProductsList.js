import React, {Component} from "react"

export default class ProductsList extends Component {
    render() {
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
                </tbody>
            </table>
         </div>
        )
    }
}