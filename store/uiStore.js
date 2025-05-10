import { create } from 'zustand';

export const useUIStore = create((set) => ({
    snackbar: {
        open: false,
        message: '',
        severity: 'success'
    },
    showSnackbar: (message, severity = 'success') =>
        set({
            snackbar: {
                open: true,
                message,
                severity,
            }
        }),
    hideSnackbar: () =>
        set((state) => ({
            snackbar: {
                ...state.snackbar,
                open: false
            }
        }))
}))