import Head from "next/head";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import Carousel from "@/components/Carousel/Carousel";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
    </>
  );
}
