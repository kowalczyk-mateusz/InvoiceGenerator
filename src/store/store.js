import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../Reducers/Index.js'

  const composeEnchancer =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(
  rootReducer,
   composeEnchancer(applyMiddleware(thunk)));


export default store