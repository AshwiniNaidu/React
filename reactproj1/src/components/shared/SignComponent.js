import React, {Component} from "react"

export default class Sign extends Component {

    constructor(props) {
        super(props);
        console.log("constructor" + this.props.heading);
    }

    componentWillMount() {
        console.log("component will mount  " + this.props.heading);
        //document.querySelector("h3").style.color = "red";
    }
    
    componentDidMount() {
        console.log("component did mount");
        document.querySelector("h3").style.color = "#ca9988";
    }

    
    componentWillUnmount() {
        console.log("component will unmount");
    }

    sendData = () => {
        this.props.onSignInClick(this.refs.userId.value);
    }
    render() {
        //this.props.heading = " Helo ! "
        console.log("render");
        return <div>
            <h3>{this.props.heading}</h3>
            <form>
            <div className="form-group form-inline">
                <label htmlFor="name">User Name: </label>
                <input type="text" className="form-control" ref="userId" name="name" placeholder="Enter User Name" />
                <br /><br/>
                <label htmlFor="pwd">Password: </label>
                <input type="password" className="form-control" ref="password" name="pwd" placeholder="Enter Password" /> 
                <br /><br />
                <button type="button" className="btn btn-primary" onClick={this.sendData}>{this.props.heading}</button>
           </div>
            </form>
            </div>
    }
}