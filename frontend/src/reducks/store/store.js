import { 
  legacy_createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {ItemReducer} from '../items/reducers';
import {CartReducer} from '../carts/reducers';

export default function createStore(history) {
  return reduxCreateStore(
      combineReducers({
          items: ItemReducer,
          carts: CartReducer,
     }),
     composeWithDevTools(
      applyMiddleware(thunk)
          )
          )
      }