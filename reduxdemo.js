const redux = require('redux');
const createStore = redux.createStore; //only one store per application

// step 1- Data
let initialState = {count: 1};

//Action types
const inc = "INC_COUNTER";
const addType = "ADD_COUNTER"

//step 2 - action creators
function increment() {
    return {type: inc}
}

function add(num) {
    return {type: addType, value: num}
}


//Step 3: Reducer 
let mathReducer = function (state=initialState, action) {
    switch(action.type) {
        case inc: {
            return {count: state.count +1};
        }
        case addType: {
            return {count: state.count + action.value}
        }
        default:
            return state;
    }
}

//Step 4 - Register the reducer in the store
let myStore = createStore(mathReducer);
console.log("my store  ", myStore.getState());

//Step 5 - when state is changed, subscribe will be executed
myStore.subscribe(() => {
    console.log("Subscribe", myStore.getState());
});


//Step 6 - Dispatch - triggers the action 
myStore.dispatch(increment());
myStore.dispatch(add(350));
/*myStore.dispatch({type: "INC_COUNTER"});
myStore.dispatch({type: "ADD_COUNTER", value: 500});*/

console.log("First Redux Example");