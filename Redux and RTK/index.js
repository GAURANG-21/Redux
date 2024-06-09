const redux = require("redux");
// console.log(redux)
const createStore = redux.createStore;

//It is better to create a variables for action-type to minimize typo errors.
const Create_order = "Create Order";
const Restocking = "Restocking";

//This is action creator - one that creates an action.
function createOrder() {
  //Action is just an object. In this case, it is the object that is getting returned.
  return {
    type: Create_order,
    quantity: 1,
  };
}

function restocking(qty = 1) {
  return {
    type: Restocking,
    payload: qty,
  };
}

const initialState = {
  numOfCakes: 10,
};

//reducer function has a prototype - reducer(state = initialState, action) => newState - and it returns a new State when action gets performed on the present state

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Create_order: {
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    }
    case Restocking: {
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);
// console.log(store);

//This initial state will give "undefined" as the reducer function is having no default value to return as state.
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

//store.dispatch(createOrder()) is same as store.dispatch({type: Create_order})
store.dispatch({
  type: Create_order,
});
store.dispatch(createOrder());
store.dispatch(createOrder());

store.dispatch(restocking());
store.dispatch(restocking(5));

unsubscribe();

store.dispatch(createOrder());

console.log("Running after unsubscribed", store.getState());
