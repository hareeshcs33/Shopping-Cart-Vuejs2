import { data } from '../data/data';

export const GET_DATA = (state) => {
    state.data = data;
}

export const addToCart_status = (state, id) => {
    return state.data.find(item => {
        if(item.id === id){
            return item.cartItem = true;
        }
    })
}
export const removeFromCart_status = (state, id) => {
    return state.data.find(item => {
        if(item.id === id){
            return item.cartItem = false;
        }
    })
}