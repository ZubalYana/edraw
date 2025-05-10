import { create } from 'zustand';

export const useCartStore = create((set) => ({
    cart: [],

    addToCart: (item) =>
        set((state) => {
            const updatedCart = [...state.cart, item];
            if (typeof window !== 'undefined') {
                localStorage.setItem('cart', JSON.stringify(updatedCart));
            }
            return { cart: updatedCart };
        }),

    setCart: (cart) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        set({ cart });
    },

    hydrateCart: () => {
        if (typeof window !== 'undefined') {
            const stored = JSON.parse(localStorage.getItem('cart') || '[]');
            set({ cart: stored });
        }
    },
}));
