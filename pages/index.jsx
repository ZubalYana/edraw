import Header from "@/components/Header";
import NavigationMenu from "@/components/NavigationMenu";
import HomeSlider from "@/components/HomeSlider";
import Advantages from "@/components/Advantages";
import TopCollections from "@/components/TopCollections";
import FeaturedItems from "@/components/FeaturedItems";
import Discount from "@/components/Discount";
import FromOurBlog from "@/components/FromOurBlog";
import Reviews from "@/components/Reviews";
import Instagram from "@/components/Instagram";
import Banners from "@/components/Banners";
import Footer from "@/components/Footer";
import { Snackbar, Alert } from '@mui/material';
import { useUIStore } from "@/store/uiStore";
import { useEffect } from 'react';
import { useCartStore } from '../store/cartStore';
import CartModal from "@/components/CartModal";


export default function Home() {
  const { snackbar, hideSnackbar } = useUIStore();
  const { cartModal, hideCartModal } = useUIStore();

  useEffect(() => {
    useCartStore.getState().hydrateCart();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <NavigationMenu />
      <HomeSlider />
      <Advantages />
      <TopCollections />
      <FeaturedItems />
      <Discount />
      <FromOurBlog />
      <Reviews />
      <Instagram />
      <Banners />
      <Footer />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={hideSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={hideSnackbar}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      <CartModal
        open={cartModal.open}
        onClose={hideCartModal}
      />

    </div>
  );
}
