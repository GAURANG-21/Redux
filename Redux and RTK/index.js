const redux = require("redux");
// console.log(redux)
const createStore = redux.createStore;

//* Creating a single reducer function managing all the states becomes difficult.
//* We can create seperate reducer functions for them with seperate initial states.
//* Then we can combine them using combineReducers function provided by Redux.

//useDispatch will run for an action, that action will be looked up in the reducer and action will be taken on current state.

//Actions
const Order_1 = "Order1";
const Order_2 = "Order2";
const Restock_1 = "Restock1";
const Restock_2 = "Restock2";

//Action Creators
function Order1(quantity = 1) {
  return {
    type: Order_1,
    payload: quantity,
  };
}

function Order2(quantity = 1) {
  return {
    type: Order_2,
    payload: quantity,
  };
}

function Restock1(quantity = 1) {
  return {
    type: Restock_1,
    payload: quantity,
  };
}

function Restock2(quantity = 1) {
  return {
    type: Restock_2,
    payload: quantity,
  };
}

//Initial States
const initialState1 = {
  product_1: 10,
};

const initialState2 = {
  product_2: 20,
};

//Reducers
const Reducer1 = (state = initialState1, action) => {
  switch (action.type) {
    case Order_1: {
      return {
        product_1: state.product_1 - action.payload,
      };
    }
    case Restock_1: {
      return {
        product_1: state.product_1 + action.payload,
      };
    }
    default:
      return state;
  }
};

const Reducer2 = (state = initialState2, action) => {
  switch (action.type) {
    case Order_2: {
      return {
        product_2: state.product_2 - action.payload,
      };
    }
    case Restock_2: {
      return {
        product_2: state.product_2 + action.payload,
      };
    }
    default:
      return state;
  }
};

//Combine reducers using combineReducers
const combineReducers = redux.combineReducers;
const rootReducer = combineReducers({
  Product1: Reducer1,
  Product2: Reducer2,
});

//Assigning rootReducer to store
const store = createStore(rootReducer);

//* Either use bindActionCreators or simply use store.dispatch(ActionCreator)
const bindActionCreators = redux.bindActionCreators(
  { Order1, Order2, Restock1, Restock2 },
  store.dispatch
);

const unsubscribe = store.subscribe(() =>
  console.log("Current State : ", store.getState())
);

bindActionCreators.Order1(2);
bindActionCreators.Order2(5);
bindActionCreators.Restock1(19);
bindActionCreators.Restock2(10);

unsubscribe();

// OUTPUT
// Current State :  { Product1: { product_1: 8 }, Product2: { product_2: 20 } }
// Current State :  { Product1: { product_1: 8 }, Product2: { product_2: 15 } }
// Current State :  { Product1: { product_1: 27 }, Product2: { product_2: 15 } }
// Current State :  { Product1: { product_1: 27 }, Product2: { product_2: 25 } }