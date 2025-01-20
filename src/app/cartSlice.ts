import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ClothingItem interfeysi
export interface ClothingItem {
  id: string;
  title: string;
  desc: string;
  price: number;
  star: number;
  urls: string[];
}

// Cart item type definition
interface CartItem extends ClothingItem {
  quantity: number; // Cart item with quantity
}

interface CartState {
  value: CartItem[];
}

// LocalStorage'dan cartni o'qish
const loadCartFromLocalStorage = (): CartItem[] => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const initialState: CartState = {
  value: loadCartFromLocalStorage(), // Agar oldin saqlangan bo'lsa, lokal saqlangan kartani yuklash
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ClothingItem>) => {
      // ClothingItemni CartItemga aylantirib qo'shish
      const index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      } else {
        state.value = state.value.map((item, inx) =>
          inx === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      localStorage.setItem("cart", JSON.stringify(state.value)); // Cartni localStorage'ga saqlash
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((i) => i.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.value)); // Cartni localStorage'ga saqlash
    },
    decrementCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.value.findIndex((i) => i.id === action.payload.id);
      state.value = state.value.map((item, inx) =>
        inx === index ? { ...item, quantity: item.quantity - 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(state.value)); // Cartni localStorage'ga saqlash
    },
    deleteAllCart: (state) => {
      state.value = [];
      localStorage.removeItem("cart"); // Cartni localStorage'dan olib tashlash
    },
  },
});

export const { addToCart, removeFromCart, decrementCart, deleteAllCart } =
  cartSlice.actions;
export default cartSlice.reducer;
