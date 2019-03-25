import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from "redux-promise";
import reducers from '../reducers'
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const initialState = {
    projects: []
};

export const store = createStore(reducers, initialState,
    composeEnhacers(applyMiddleware(promiseMiddleware)));