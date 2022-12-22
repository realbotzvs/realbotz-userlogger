import { applyMiddleware, createStore, compose } from 'redux';
import mainRootReducers from './reducers/mainRootReducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  mainRootReducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
