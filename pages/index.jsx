import { Jost } from "next/font/google";
import Header from "@/components/Header";
import NavigationMenu from "@/components/NavigationMenu";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function Home() {
  return (
    <div className={jost.className}>
      <Header />
      <NavigationMenu />
    </div>
  );
}
