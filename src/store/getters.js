// export const getCustomersData = state => {
//   return state.customers;
// };

export const cartList = state => {
    return state.cartList = state.data.filter(item => {
        return item.cartItem == true;
    });
}

export const cartListLength = state => {
    return state.cartList.length;
}