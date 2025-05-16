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

    clearCart: () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('cart');
        }
        set({ cart: [] });
    },

    addItem: (item) => set((state) => ({ cart: [...state.cart, item] })),

    removeItem: (itemId) =>
        set((state) => {
            const updatedCart = state.cart.filter((item) => item._id !== itemId);
            if (typeof window !== 'undefined') {
                localStorage.setItem('cart', JSON.stringify(updatedCart));
            }
            return { cart: updatedCart };
        }),

    updateQuantity: (itemId, quantity) =>
        set((state) => {
            const updatedCart = state.cart.map((item) =>
                item._id === itemId
                    ? { ...item, quantity: Math.max(quantity, 1) }
                    : item
            );
            if (typeof window !== 'undefined') {
                localStorage.setItem('cart', JSON.stringify(updatedCart));
            }
            return { cart: updatedCart };
        }),

    hydrateCart: () => {
        if (typeof window !== 'undefined') {
            const stored = JSON.parse(localStorage.getItem('cart') || '[]');
            set({ cart: stored });
        }
    },
}));
