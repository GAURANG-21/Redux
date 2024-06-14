//* Helps in working with immutable states.

const { createStore } = require("redux");

//* It will be helpful when working with nested immutable data structures.
const produce = require("immer").produce;

const applyMiddlewares = require("redux").applyMiddleware;
const reduxLogger = require('redux-logger')


//Initial State
const person = {
  name: "Gaurang Agarwal",
  address: {
    street: "XYZ",
    city: "Agra",
    state: "UP",
  },
};

// Action Creator
function Person(state) {
  return {
    type: "change",
    payload: state
  };
}

// Reducer
const reducer = (state = person, action) => {
  switch (action.type) {

    // case "change" : {
    //     return {
    //         ...state,
    //         address:{
    //             ...state.address,
    //             state: action.payload
    //         }
    //     }
    // }

    case "change": {
      return produce(state, (draft) => {
        draft.address.state = action.payload;
      });
    }
    default: return state;
  }
};



const logger = reduxLogger.createLogger({
  predicate: undefined,
  collapsed:  (getState, action)=>{return action.type==="change"},
  colors: {
    title: () => 'inherit',
    prevState: () => '#ffa34',
    action: () => '#03A9F4',
    nextState: () => '#4CAF50',
    error: () => '#F20404',
    },
    level: "log",
    logger: console,
    logErrors: false
    });
  const store = createStore(reducer, applyMiddlewares(logger));

// console.log("Initial State :", store.getState());
store.dispatch(Person("Uttar Pradesh"));
// console.log("Final State :", store.getState());

//Output


// Initial State : {
//     name: 'Gaurang Agarwal',
//     address: { street: 'XYZ', city: 'Agra', state: 'UP' }
//   }
//   Final State : {
//     name: 'Gaurang Agarwal',
//     address: { street: 'XYZ', city: 'Agra', state: 'Uttar Pradesh' }
//   }