import { createSelector } from 'reselect';

const cartsSelector = state => state.carts.list;

export const getCarts = createSelector([cartsSelector], state => state);


export const getSubtotal =createSelector(
    [cartsSelector],
    (state)=>state.subtotal
);
