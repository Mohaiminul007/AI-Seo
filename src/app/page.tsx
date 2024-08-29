import { CallToAction } from "@/components/CallToAction";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Testimonials } from "@/components/Testimonials";


export default function Home() {
  return( <>
    <Header/>
    <Hero/>
    <LogoTicker/>
    <Features/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>
  </> 
  );
}
