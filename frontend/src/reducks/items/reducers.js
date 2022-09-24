import * as Actions from './actions';
import initialState from '../store/initialState';

export const ItemReducer = (state = initialState.item, action) => {
    switch (action.type) {
        case Actions.FETCH_ITEM:
            return {
                ...state,
                // ...action.payload.item,
                results: action.payload.item.results
            };
        default:
            return state;
    }
};
