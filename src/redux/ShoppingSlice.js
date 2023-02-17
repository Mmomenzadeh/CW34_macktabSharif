import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  total: 0,
  totalPrice: 0,
};



const ShoppingSlice = createSlice({
  name: "Shopping/Slice",
  initialState,
  reducers: {
    ADD: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );


        const newProduct = { ...action.payload , quantity:1 };
        console.log(newProduct);

      if (index > 0) {
        state.cartItems[index] = {...state.cartItems[index],quantity: state.cartItems[index].quantity + 1};
      } else {
        state.cartItems.push(newProduct);
      }

      state.total +=1
      state.totalPrice += Math.floor(Number(action.payload.price))
    },
    DELETE: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },

    CLREARCART :(state , action)=>{
        state.total = 0 ;
        state.totalPrice = 0 ; 
        state.cartItems = action.payload
    }
  },
});

export const { ADD, DELETE  , CLREARCART} = ShoppingSlice.actions;

export default ShoppingSlice.reducer;
