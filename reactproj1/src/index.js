import "../node_modules/bootstrap/dist/css/bootstrap.css"
import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"

import {createStore, combineReducers} from "redux"
import {Provider} from "react-redux"

import App from './components/App' //when default export is used
//import { App } from './components/App' //when named export is used

//Redux Step 1 - Products Data
let productsData = [{"id": 1, "name": "Nokia 5200", "price": 5000},
{"id": 2, "name": "iPhone X", "price": 85000},
{"id": 3, "name": "RedMi Note4", "price": 15000},
{"id": 4, "name": "Samsung Galaxy2", "price": 10000},
{"id": 5, "name": "OnePlus 3T", "price": 30000}]

let cartData = [];

//Redux Step 2 - Reducer 
let productsReducer =  (state=productsData, action) => {
    switch(action.type) {
        case "ADD_TO_CART": {
            let p = state.filter((product) => product.id !== action.payload.id)
            return p;
        }
        case "REMOVE_FROM_CART": {
            state = [...state, action.payload];
            return state;
        }
        default: {
            return state;
        }
    }
}

let cartReducer = (state=cartData, action) => {
    switch(action.type) {
        case "ADD_TO_CART": {
            state = [...state, action.payload];
            return state;
        }
        case "REMOVE_FROM_CART": {
            let p = state.filter((item) => item.id !== action.payload.id);
            return p;
        }
        case "INCREASE_QTY": {
            let p = state.map((item) => {
                if(item.id === action.payload.id) {
                    item.quantity += 1;
                    return item;
                } else {
                    return item;
                }
            })
            return p;
        }
        case "DECREASE_QTY": {
            let p = state.map((item) => {
                if(item.id === action.payload.id) {
                    if(item.quantity>1) {
                        item.quantity -= 1;
                    }
                    return item;
                } else {
                    return item;
                }
            })
            return p;
        }
        default: {
            return state;
        }
    }
}

//Redux step 3 - Create store with redux and Register reducer in Store object
// step 4 - provide in render function below and next in ProductsList.js
let appStore = createStore(combineReducers({productsReducer, cartReducer}));


ReactDOM.render(
<Provider store={appStore}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById("root"))