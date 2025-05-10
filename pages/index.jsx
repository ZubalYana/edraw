import { Jost } from "next/font/google";
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

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const { snackbar, hideSnackbar } = useUIStore();

  useEffect(() => {
    useCartStore.getState().hydrateCart();
  }, []);

  return (
    <div className={jost.className + " overflow-x-hidden"}>
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
    </div>
  );
}
