import React, {Component} from "react"
import Sign from "./shared/SignComponent"

class SignIn extends Component {
    state = {loggedUserName: "Guest"}
    handleSignIn = (uname) => {
        console.log("handleSign In " + uname);
        this.setState({loggedUserName: uname});
    }

    render() {
        return (
        <div className="col-md-6">
            <p>Logged in User {this.state.loggedUserName}</p>
            <Sign heading="Sign In" onSignInClick={this.handleSignIn} />
        </div>
        )
    }
}

export default SignIn