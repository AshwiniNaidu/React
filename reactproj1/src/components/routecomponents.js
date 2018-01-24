import React, {Component} from "react"
import ProductsList from "./shopping/ProductsList"
import CartItems from "./shopping/CartItems"

import axios from "axios"


export class Home extends Component {
    render() {
        return (
        <div className="row">
            <div className="col-sm-6">
            <ProductsList />
            </div>
            <div className="col-sm-6">
            <CartItems />
            </div>
        </div>
        )
    }
}

export class ManageProducts extends Component {
    constructor(){
        super()
        this.apiUrl="http://localhost:4000/wsproducts"
    }

    state = {data : []}
    componentDidMount() {
        axios.get(this.apiUrl).then((response) => {
                console.log("Success", response);
                this.setState({"data": response.data});
            }, (err) => {
            console.log("Error", err);
        })
    }

    addProduct = () => {
        let product = {"id": null, "name": this.refs.pname.value, "price": this.refs.price.value};
        axios.post(this.apiUrl, product).then((response) => {
            console.log("success adding the product", response);
            this.state.data.push(response.data);
            this.setState({"data": this.state.data});
            this.refs.pname.value = null;
            this.refs.price.value = null;
        }, (err) => {
            console.log("Error adding product", err);
        }
    )}

    deleteProduct = (id) => {
        axios.delete(this.apiUrl+"/"+id).then((response) => {
            console.log("success deleting the product", response);
            let idx = this.state.data.findIndex(e => e.id === id);
            this.state.data.splice(idx, 1);
            this.setState({"data": this.state.data});
        }, (err) => {
            console.log("Error deleting product", err); 
        }

    )}

    editProduct = (product) => {
        this.refs.pid.value = product.id;
        this.refs.pname.value = product.name;
        this.refs.price.value = product.price;

    }

    updateProduct = () => {
        let product = {"id": this.refs.pid.value, "name": this.refs.pname.value, "price": this.refs.price.value};
        axios.put(this.apiUrl+"/"+ product.id, product).then((response) => {
            console.log("success updating the product", response);
            this.state.data.map((i) => {
                if(i.id === parseInt(product.id, 0)) {
                    i.name = product.name; 
                    i.price = product.price;
                    return i;
                } else {
                    return i;
                }
            });
            this.setState({"data": this.state.data});
        }, (err) => {
            console.log("Error updating product", err);
        }
    )}
    

    render() {
        let output = null;
        if(this.state.data.length > 0) {
            output = this.state.data.map( (product) => {
                return <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <button className="btn btn-success" onClick={() => {this.editProduct(product)}}>Edit</button>
                        &nbsp;
                        <button className="btn btn-danger" onClick={() => {this.deleteProduct(product.id)}}>Delete</button>
                    </td>
                </tr>
            });

        } else {
            output = <tr><td colSpan="4">No Data Available</td></tr>
        }
        return  <div>
            <h3>Manage Products</h3>
            <form className="well col-sm-3">
                <div className="form-group">
                <input type="text" className="form-control" ref="pid" readOnly /><br />
                <input type="text" className="form-control" ref="pname" placeholder="Enter Product Name" /><br />
                <input type="text" className="form-control" ref="price" placeholder="Enter Product Price" /><br />
                <button type="button" className="btn btn-primary" onClick={this.addProduct}>Add Product</button>&nbsp;
                <button type="button" className="btn btn-info" onClick={this.updateProduct}>Update Product</button>
                </div>
            </form>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {output}
                </tbody>
            </table>
        </div>
    }
}

export class NotFound extends Component {
    render() {
        return <h2>Oops.. Page not found</h2>
    }
}