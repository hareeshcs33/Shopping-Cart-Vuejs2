import { data } from '../data/data';

export const GET_DATA = (state) => {
    state.data = data;
}

export const add_to_cart = (state, id) => {
    state.data.map(item => {
        if(item.id === id){
            item.cartItem = true;
        }
    })
}

export const remove_from_cart = (state, id) => {
    return state.data.map(item => {
        if(item.id === id){
            item.cartItem = false;
        }
    })
}
