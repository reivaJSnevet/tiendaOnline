// src/orderStore.js
import { create } from 'zustand';

const useOrderStore = create((set) => ({
  order: {
    userId: 1,
    status: 'processed',
    total: 0,
  },
  updateOrder: (updatedFields) => set((state) => ({
    order: { ...state.order, ...updatedFields }
  })),
  clearOrder: () => set({ order: { userId: 1, status: 'processed', total: 0 } })
}));

export default useOrderStore;
