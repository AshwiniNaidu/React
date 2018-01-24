import React from "react"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

import {Route, Link, Switch} from "react-router-dom"
import { NotFound, Home, ManageProducts } from "./routecomponents";

//default export
/*can also be used as "export default App" at the end of the file
    and remove the export default from below
*/
export default class App extends React.Component {
    render() {
        return <div className="container-fluid">
        <div className="row">
        <div className="col-xs-12">
            <nav className="navbar navbar-inverse">
                <div className="navbar-header">
                    <Link to='/' className="navbar-brand">React App</Link>                   
                </div>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signin" className="nav-link">Sign In</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/manage" className="nav-link">Manage Products</Link>
                    </li>
                    </ul>
            </nav>
            <Switch>
                {/*<Route exact path="/" render={() => <h2>Home</h2>} />*/}
                <Route exact path="/" component={Home} />
                <Route path="/signIn" component={SignIn} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/manage" component={ManageProducts} />
                <Route path="*" component={NotFound} />
            </Switch>
            </div>
            </div>
        </div>
    }
}