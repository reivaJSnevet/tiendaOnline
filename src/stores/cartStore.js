// src/cartStore.js
import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => {
    const existingProduct = state.cart.find(item => item.productId === product.productId);
    if (existingProduct) {
      return {
        cart: state.cart?.map(item =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      };
    } else {
      return { cart: [...state.cart, product] };
    }
  }),
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.productId !== productId)
  })),
  updateQuantity: (productId, quantity) => set((state) => ({
    cart: state?.cart?.map(item =>
      item.productId === productId ? { ...item, quantity } : item
    )
  })),
  clearCart: () => set({ cart: [] })
}));

export default useCartStore;
