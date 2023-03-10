





import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/RootReducer';

const middlewares = [thunk];
// const createLogger = require('redux-logger');

// if (process.env.NODE_ENV === 'development') {
//   const logger = createLogger();
//   middlewares.push(logger);
// }
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

let store = createStoreWithMiddleware(rootReducer);
export default store;


