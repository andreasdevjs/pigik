import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import setAuthToken from '../Helpers/setAuthToken';
import rootReducer from './Reducers/index.reducer';

const initialState = {};

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// set up a store subscription listener
// to store the users token in localStorage

// prevent auth error on first run of subscription
// let currentState = {
//   auth: { token: null, isAuthenticated: null, loading: true, user: null }
// };


// initialize current state from redux store for subscription comparison
// preventing undefined error
// let currentState = store.getState();

// store.subscribe(() => {
//   // keep track of the previous and current state to compare changes
//   let previousState = currentState;
//   currentState = store.getState();
//   // if the token changes set the value in localStorage and axios headers
//   if (previousState.auth.token !== currentState.auth.token) {
//     const token = currentState.auth.token;
//     setAuthToken(token);
//   }
// });

export default store;