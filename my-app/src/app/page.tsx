import About from "@/components/About";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Special from "@/components/Special";
import Image from "next/image";

export default function Home() {
  return (
   <div>
      <Navbar/>
      <Hero/>
      <Special/>
      <About/>
      <Gallery/>
      <Contact/>
   </div>
  );
}
