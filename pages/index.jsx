import { Jost } from "next/font/google";
import Header from "@/components/Header";
import NavigationMenu from "@/components/NavigationMenu";
import HomeSlider from "@/components/HomeSlider";
import Advantages from "@/components/Advantages";
import TopCollections from "@/components/TopCollections";
import FeaturedItems from "@/components/FeaturedItems";
import Discount from "@/components/Discount";
const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function Home() {
  return (
    <div className={jost.className}>
      <Header />
      <NavigationMenu />
      <HomeSlider />
      <Advantages />
      <TopCollections />
      <FeaturedItems />
      <Discount />
    </div>
  );
}
