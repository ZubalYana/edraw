import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}
