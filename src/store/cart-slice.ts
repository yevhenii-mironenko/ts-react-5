import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {},
    removeFromCart() {},
  },
});

type CartState = {
  items: CartItem[];
};

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};
