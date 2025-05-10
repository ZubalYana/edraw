// CartModal.tsx
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useCartStore } from '../store/cartStore';

Modal.setAppElement('#__next'); // ✅ Correct for Next.js

export default function CartModal({ open, onClose }) {
    const cart = useCartStore((state) => state.cart);

    useEffect(() => {
        console.log("Cart items:", cart);
    }, [cart]);

    return (
        <Modal
            isOpen={open}
            onRequestClose={onClose}
            contentLabel="Cart"
            className="bg-white rounded-xl max-w-[90vw] w-[500px] p-6 mx-auto my-[10vh] outline-none"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50"
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-black">✕</button>
            </div>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="space-y-3">
                    {cart.map((item, index) => (
                        <li key={index} className="border-b pb-2">{item.name}</li>
                    ))}
                </ul>
            )}
        </Modal>
    );
}
