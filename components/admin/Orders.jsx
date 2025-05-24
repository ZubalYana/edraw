'use client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useUIStore } from '@/store/uiStore';
import { Alert, Snackbar } from '@mui/material';

const statuses = ['review', 'progress', 'completed', 'canceled'];

export default function Orders() {
    const queryClient = useQueryClient();
    const { snackbar, showSnackbar, hideSnackbar } = useUIStore();

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
            showSnackbar('Order status updated.', 'success');
        },
        onError: () => {
            showSnackbar('Failed to update status.', 'error');
        }
    });

    if (isLoading) return <p>Loading orders...</p>;
    if (isError) return <p>Error loading orders</p>;

    const grouped = {};
    statuses.forEach(status => {
        grouped[status] = data.filter(order => order.status === status);
    });

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Orders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {statuses.map((status) => (
                    <div key={status}>
                        <h3 className="text-lg font-semibold capitalize mb-2 text-center bg-gray-100 py-2 rounded">{status}</h3>
                        {grouped[status].map((order) => (
                            <div key={order._id} className="bg-gray-100 rounded-2xl shadow p-4 mb-4 space-y-2 hover:bg-gray-300 transition">
                                <div>
                                    <p><strong>Name:</strong> {order.userName}</p>
                                    <p><strong>Phone:</strong> {order.userPhone}</p>
                                    <p><strong>Comment:</strong> {order.userComment || '—'}</p>
                                    <p><strong>Total:</strong> ${order.cart.reduce((sum, item) => {
                                        const price = item.prices?.[item.prices.length - 1] || 0;
                                        const quantity = item.quantity || 1;
                                        return sum + price * quantity;
                                    }, 0).toFixed(2)}</p>

                                    <div className="flex items-center space-x-2 mt-2">
                                        <strong>Status:</strong>
                                        <select
                                            value={order.status}
                                            onChange={(e) =>
                                                updateOrderMutation.mutate({ id: order._id, status: e.target.value })
                                            }
                                            className="rounded px-2 py-1"
                                        >
                                            {statuses.map(s => (
                                                <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-2 mt-2">
                                    {order.cart.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg">
                                            <img
                                                src={item.img || '/placeholder.jpg'}
                                                alt={item.name}
                                                className="w-14 h-14 object-cover rounded-md border"
                                            />
                                            <div>
                                                <p className="text-sm font-medium">{item.name}</p>
                                                <p className="text-xs text-gray-600">
                                                    ${item.prices?.[item.prices.length - 1]} × {item.quantity || 1}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={hideSnackbar}>
                <Alert onClose={hideSnackbar} severity={snackbar.severity} variant="filled">
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div>
    );
}
