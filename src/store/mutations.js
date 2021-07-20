import { data } from '../data/data';

export const GET_DATA = (state) => {
    state.data = data;
}

export const add_to_cart = (state, id) => {
    const add_to_cart = state.data.map(item => {
        if(item.id === id){
            item.cartItem = true;
        }
        return item;
    })
    state = {
        ...state,
        data: [...add_to_cart]
    }
}

export const remove_from_cart = (state, id) => {
    const remove_from_cart = state.data.map(item => {
        if(item.id === id){
            item.cartItem = false;
        }
        return item;
    });
    state = {
        ...state,
        data: [...remove_from_cart]
    }
}
