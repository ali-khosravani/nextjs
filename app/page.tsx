import { Footer } from "@/com/layout/Footer";
import { Header } from '@/com/layout/Header';
import OurCustomers from "@/com/customers/OurCustomers";
import { Slider } from "@/com/slider/Slider";
import Category from "@/com/products/Category";
import AccessControl from "@/com/products/AccessControl";
import Gate from '@/com/products/GateAccessControl';
import Inspection from '@/com/products/Inspection';
import RollCall from '@/com/products/RollCall';
import Network from "./components/products/Network";
import Camera from "./components/products/Camera";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <AccessControl />
      <RollCall />
      <Gate />
      <Inspection />
      <Category />
      <Network />
      <Camera />      
      <OurCustomers />      
      <Footer />
    </>
  );
}
