import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItems: []
}

const cartSlice  = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state, action){
      state.isCartOpen = !state.isCartOpen;
    },
    addItem(state, action){
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      if(existingItem){
        existingItem.quantity++
      } else {
        state.cartItems.push(newItem)
      }
    },
    removeItem(state, action){
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    incrementItem(state, action){
      state.cartItems = state.cartItems.map(item => {
        if (item.id === action.payload) {
            item.quantity++;
        }
        return item;
    });
    },
    decrementItem(state, action){
      const newCartItems = state.cartItems.map(item => {
        if (item.id === action.payload) {
            item.quantity--;
        }
        return item;
      });
      state.cartItems = newCartItems.filter(item => item.quantity !== 0)
    }
  }
})

export default cartSlice.reducer;
export const {toggleCart, addItem, removeItem, incrementItem, decrementItem} = cartSlice.actions