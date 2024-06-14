// const createStore = require("redux").createStore;
// const applyMiddlewares = require("redux").applyMiddleware;
// const axios = require("axios");
// const thunk = require("redux-thunk").default;
import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import { thunk } from "redux-thunk";

// ACTION NAMES
const NEWS_FETCHING_ONGOING = "News fetching ongoing";
const NEWS_FETCHING_SUCCESSFUL = "News fetching successful";
const NEWS_FETCHING_UNSUCCESSFUL = "News fetching unsuccessful";

const initialState = {
  loading: false,
  news: [],
  error: "",
};

// ACTION CREATORS
function newsFetchingOngoing() {
  return {
    type: NEWS_FETCHING_ONGOING,
  };
}

function newsFetchingSuccessful(payload) {
  return {
    type: NEWS_FETCHING_SUCCESSFUL,
    payload,
  };
}

function newsFetchingUnsuccessful(payload) {
  return {
    type: NEWS_FETCHING_UNSUCCESSFUL,
    payload,
  };
}

// REDUCER FUNCTION
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_FETCHING_ONGOING:
      return {
        ...state,
        loading: true,
      };

    case NEWS_FETCHING_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        news: action.payload,
      };

    case NEWS_FETCHING_UNSUCCESSFUL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

// THUNK FUNCTION
function getNews() {
    return function (dispatch) {
      dispatch(newsFetchingOngoing());
      axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=9e10708d9a1347cda9d9f3b72f59d7fe")
        .then((response) => {
          // console.log("This is the response I got", response.data);
          const news_url = response.data.articles.map((item) => item.url); // Extract URLs from articles
          dispatch(newsFetchingSuccessful(news_url));
        })
        .catch((error) => {
          console.log("This is the error I am getting", error);
          dispatch(newsFetchingUnsuccessful(error.message));
        });
    };
  }

// CREATE STORE
const store = createStore(reducer, applyMiddleware(thunk));

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(getNews());
