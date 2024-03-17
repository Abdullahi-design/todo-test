import { create } from 'zustand'
import {
    createJSONStorage,
    persist,
} from 'zustand/middleware'

export const useCart = create()(
    persist(
      (set) => ({
        items: [],
        addItem: (food) =>
          set((state) => {
            const existingItem = state.items.find(
              (item) => item.food.id === food.id
            );
  
            if (existingItem) {
              // If item already exists, update the quantity
              existingItem.quantity += 1;
              return { items: [...state.items] };
            } else {
              // If item doesn't exist, add a new entry
              return { items: [...state.items, { food, quantity: 1 }] };
            }
          }),
        removeItem: (id) =>
          set((state) => ({
            items: state.items.filter(
              (item) => item.food.id !== id
            ),
          })),
        clearCart: () => set({ items: [] }),
      }),
      {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
);
  