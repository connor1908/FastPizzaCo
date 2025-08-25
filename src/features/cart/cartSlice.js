import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],

  //fake pizza to easily code the reducers below
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "Mediterranean",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload = pizzaId
      //first we will find the item
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      //and then increase the quantity
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      //if quantity is 0 dont decrease it
      if (item.quantity > 1) item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      //we can also remove the item if quantity reaches 0 like this
      //here we call already created deleteItem from our cartSlice
      // if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action)
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

//exporting action creators
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

//export reducer itself
export default cartSlice.reducer;

// Selector functions
export const getCart = (state) => state.cart.cart;

export const getTotalCartPizzas = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  //if we can find the item in the cart then return the quantity if it exists(?.) or else(??) return 0
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

// Above is same as this
/*
export function getCurrentQuantityByIdAlternative(id) {
  return function (myState) {
    return myState.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
  };
}
*/
