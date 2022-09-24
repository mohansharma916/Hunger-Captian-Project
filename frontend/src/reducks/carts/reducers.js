import * as Actions from './actions';
import initialState from '../store/initialState';

export const CartReducer = (state = initialState.carts, action) => {
    switch (action.type) {
        case Actions.ADD_CART:
            return {
                list:action.result,
                subtotal: action.subtotal
                        };
        case Actions.INCREASE_CART:
            return {
                list:action.result,
                subtotal: action.subtotal
         };
        case Actions.DECREASE_CART:
            return {
                list:action.result,
                subtotal: action.subtotal
         };
         case Actions.FETCH_CART:
            return {
                list:action.result,
                subtotal: action.subtotal
         };
        default:
            return state;
    }
};