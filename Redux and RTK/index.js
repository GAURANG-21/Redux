const redux = require("redux");
// console.log(redux)
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

//It is better to create a variables for action-type to minimize typo errors.
const Create_order = "Create Order";
const Restocking = "Restocking";

const Create_order_1 = "Create Order 1";
const Restocking_1 = "Restocking 1";

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

function createOrder1(qty = 1) {
  return {
    type: Create_order_1,
    payload: qty,
  };
}

function restocking1(qty = 1) {
  return {
    type: Restocking_1,
    payload: qty,
  };
}

const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
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
    case Create_order_1:{
        return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1,
        }
    }
    case Restocking_1: {
        return {
            ...state, 
            numOfIceCreams: state.numOfIceCreams + action.payload,
        }
    }
    default:
      return state;
  }
};

const store = createStore(reducer);
const action = bindActionCreators({createOrder, createOrder1, restocking, restocking1}, store.dispatch);
// console.log(action)


const unsubscribe = store.subscribe(()=>{
  console.log("Current state is : ", store.getState());
});

action.createOrder();
action.createOrder1();
action.restocking(2);
action.restocking1(2);
action.createOrder();

unsubscribe();