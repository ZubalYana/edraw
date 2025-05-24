import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

export default function Orders() {
    const queryClient = useQueryClient();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/orders`);
            return res.data.orders;
        },
    });

    const updateOrderMutation = useMutation({
        mutationFn: async ({ id, status }) => {
            return await axios.patch(`http://localhost:5000/orders/${id}`, { status });
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['orders']);
        },
    });

    if (isLoading) return <p>Loading orders...</p>;
    if (isError) return <p>Error loading orders</p>;

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold">Orders</h2>
            {data.map((order) => (
                <div key={order._id} className="border rounded-xl p-4 shadow-md bg-white space-y-2">
                    <p><strong>Name:</strong> {order.userName}</p>
                    <p><strong>Phone:</strong> {order.userPhone}</p>
                    <p><strong>Comment:</strong> {order.userComment || '—'}</p>
                    <p><strong>Total:</strong> ${order.total || 0}</p>
                    <p><strong>Status:</strong>
                        <select
                            value={order.status}
                            onChange={(e) =>
                                updateOrderMutation.mutate({ id: order._id, status: e.target.value })
                            }
                            className="ml-2 border p-1 rounded"
                        >
                            <option value="review">Review</option>
                            <option value="progress">In Progress</option>
                            <option value="completed">Completed</option>
                            <option value="canceled">Canceled</option>
                        </select>
                    </p>
                    <ul className="text-sm list-disc ml-5">
                        {order.cart.map((item, i) => (
                            <li key={i}>
                                {item.name} — ${item.prices?.[item.prices.length - 1]} × {item.quantity || 1}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}