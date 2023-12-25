import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [{ id: 1, name: "eggs", price: 10000 }],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearcart: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, removeItem, clearcart } = cartSlice.actions;
export default cartSlice.reducer;
