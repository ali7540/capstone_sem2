import Image from "next/image";
import LandingPage from "./landingPage/page";
import { Nav } from "react-day-picker";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage/>
      <Footer />
    </div>
  );
}
