import "../node_modules/bootstrap/dist/css/bootstrap.css"
import React from "react"
import ReactDOM from "react-dom"

//Using React create Element

let el = React.createElement("u", null, "First React Element Example");
let root = document.getElementById("root");
ReactDOM.render(el, root);

//Using JSX

/*ReactDOM.render(
    <div>
        <h3>Welcome to React</h3>
        <p>First React Example - { 10+5} </p>
    </div>, root);*/

//Function based Component    
let App = () => {
    return <h2 className="well">First React Functional Component</h2>;
}

//ReactDOM.render(<App></App>, root);
ReactDOM.render(<App />, root);

