
export const ADD_CART = 'ADD_CART';
export const addCartAction = (carts,subtotal) => {
    return {
        type: ADD_CART,
        result:carts,
        subtotal:subtotal,
    };
};

export const INCREASE_CART="INCREASE_CART";
export const increaseCartAction=(carts,subtotal)=>{
    return {
        type:INCREASE_CART,
        result:carts,
        subtotal:subtotal,
    };
};

export const DECREASE_CART="DECREASE_CART";
export const decreaseCartAction=(carts,subtotal)=>{
    return {
        type:DECREASE_CART,
        result:carts,
        subtotal:subtotal,
    };
};

export const FETCH_CART="FETCH_CART";
export const fetchCartAction=(carts,subtotal)=>{
    return {
        type:FETCH_CART,
        result:carts,
        subtotal:subtotal,
    };
};