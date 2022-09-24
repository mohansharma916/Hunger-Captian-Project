import { createSelector } from 'reselect';

const itemSelector = state => state.items;

export const getItem = createSelector([itemSelector], state => state);
