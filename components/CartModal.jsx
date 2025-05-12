import React, { useState } from 'react';
import Modal from 'react-modal';
import { useCartStore } from '../store/cartStore';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Button, TextField } from '@mui/material';

Modal.setAppElement('#__next');

export default function CartModal({ open, onClose }) {
    const cart = useCartStore((state) => state.cart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const removeItem = useCartStore((state) => state.removeItem);

    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userComment, setUserComment] = useState('');

    const total = cart.reduce((acc, item) => {
        const lastPrice = item.prices[item.prices.length - 1] ?? 0;
        const quantity = item.quantity ?? 1;
        return acc + lastPrice * quantity;
    }, 0);

    const sendOrder = () => {
        fetch('http://localhost:5000/sendOrderDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cart, userName, userPhone, userComment }),
        })
            .then(response => response.json())
            .then(data => console.log('Order sent successfully:', data))
            .catch(error => console.error('Error sending order:', error));
    };

    const truncate = (str, maxLength) =>
        str.length > maxLength ? str.slice(0, maxLength) + '...' : str;

    return (
        <Modal
            isOpen={open}
            onRequestClose={onClose}
            contentLabel="Cart"
            className="bg-white rounded-2xl max-w-[95vw] p-6 mx-auto my-[10vh] outline-none"
            overlayClassName="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-start z-50"
        >
            <button onClick={onClose} className="text-gray-500 hover:text-black absolute top-4 right-4">
                <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-[500px]">
                    <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

                    {cart.length === 0 ? (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    ) : (
                        <div className="space-y-4 max-h-[240px] overflow-y-auto custom-scroll pr-[10px]">
                            {cart.map((item) => {
                                const price = item.prices[item.prices.length - 1] ?? 0;
                                const quantity = item.quantity ?? 1;
                                const subtotal = (price * quantity).toFixed(2);

                                return (
                                    <div key={`${item._id}-${quantity}`} className="flex items-center justify-between border-b pb-2">
                                        <img src={item.img} alt={item.name} className="w-14 h-14 object-cover rounded" />
                                        <div className="flex flex-col w-[220px]">
                                            <span className="font-medium text-sm">
                                                {truncate(item.name, 25)}
                                            </span>
                                            <span className="text-xs text-gray-500">${price.toFixed(2)} each</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => updateQuantity(item._id, quantity - 1)}
                                                disabled={quantity <= 1}
                                                className="p-1 text-gray-600 hover:text-black disabled:opacity-50"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="px-2 text-sm">{quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item._id, quantity + 1)}
                                                className="p-1 text-gray-600 hover:text-black"
                                            >
                                                <Plus size={16} />
                                            </button>
                                            <span className="ml-4 font-semibold text-gray-700 text-sm">
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

                        </div>

                    )}
                    <div className="text-left mt-4 font-bold text-lg">
                        Total: ${total.toFixed(2)}
                    </div>
                </div>

                <div className="w-full lg:w-[320px] flex flex-col gap-4">
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                    />
                    <TextField
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setUserPhone(e.target.value)}
                        value={userPhone}
                    />
                    <TextField
                        label="Comment"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                        onChange={(e) => setUserComment(e.target.value)}
                        value={userComment}
                    />
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <Button
                    variant="contained"
                    sx={{
                        width: '80%',
                        height: '40px',
                        backgroundColor: '#023047',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#03587e',
                        },
                    }}
                    onClick={sendOrder}
                >
                    Checkout
                </Button>
            </div>
        </Modal>
    );
}
