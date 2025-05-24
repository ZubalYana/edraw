import { Jost } from "next/font/google";
import { Snackbar, Alert } from '@mui/material';
import { useUIStore } from "@/store/uiStore";
import { useEffect } from 'react';
import Orders from "@/components/admin/Orders";
export default function Admin() {
    const { snackbar, hideSnackbar } = useUIStore();
    const { cartModal, hideCartModal } = useUIStore();


    return (
        <div className="overflow-x-hidden">
            <h1>Admin panel</h1>
            <Orders />
        </div>
    );
}
