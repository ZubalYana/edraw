import React from 'react';
import Modal from 'react-modal';
import { useCartStore } from '../store/cartStore';
import { X, Minus, Plus, Trash2 } from 'lucide-react';

Modal.setAppElement('#__next');

export default function CartModal({ open, onClose }) {
    const cart = useCartStore((state) => state.cart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const removeItem = useCartStore((state) => state.removeItem);

    const total = cart.reduce((acc, item) => {
        const lastPrice = item.prices[item.prices.length - 1] ?? 0;
        const quantity = item.quantity ?? 1;
        return acc + lastPrice * quantity;
    }, 0);

    console.log(cart);

    return (
        <Modal
            isOpen={open}
            onRequestClose={onClose}
            contentLabel="Cart"
            className="bg-white rounded-2xl max-w-[95vw] w-[500px] p-6 mx-auto my-[10vh] outline-none"
            overlayClassName="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-start z-50"
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-black">
                    <X className="w-5 h-5" />
                </button>
            </div>

            {cart.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cart.map((item) => {
                        const price = item.prices[item.prices.length - 1] ?? 0;
                        const quantity = item.quantity ?? 1;
                        const subtotal = (price * quantity).toFixed(2);

                        return (
                            <div key={`${item._id}-${quantity}`} className="flex items-center justify-between border-b pb-2">
                                <div className="flex flex-col">
                                    <span className="font-medium">{item.name}</span>
                                    <span className="text-sm text-gray-500">${price.toFixed(2)} each</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => updateQuantity(item._id, quantity - 1)}
                                        disabled={quantity <= 1}
                                        className="p-1 text-gray-600 hover:text-black disabled:opacity-50"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="px-2">{quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item._id, quantity + 1)}
                                        className="p-1 text-gray-600 hover:text-black"
                                    >
                                        <Plus size={16} />
                                    </button>
                                    <span className="ml-4 font-semibold text-gray-700">
                                        ${subtotal}
                                    </span>
                                    <button
                                        onClick={() => removeItem(item._id)}
                                        className="ml-2 text-red-500 hover:text-red-700"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}

                    <div className="text-right mt-4 font-bold text-lg">
                        Total: ${total.toFixed(2)}
                    </div>
                </div>
            )}
        </Modal>
    );
}
