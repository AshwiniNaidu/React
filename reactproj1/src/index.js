import "../node_modules/bootstrap/dist/css/bootstrap.css"
import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"

import App from './components/App' //when default export is used
//import { App } from './components/App' //when named export is used

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById("root"))