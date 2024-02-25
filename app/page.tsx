import { Footer } from "@/com/layout/Footer";
import styles from "./page.module.css";
import { Header } from '@/com/layout/Header'
import OurCustomers from "@/com/customers/OurCustomers";
import { Slider } from "@/com/slider/Slider";
import Category from "@/com/products/Category";
import AccessControl from "@/com/products/AccessControl";
import Gate from '@/com/products/GateAccessControl'
import Inspection from '@/com/products/Inspection'
import RollCall from '@/com/products/RollCall'
import Hardware from "@/com/products/Hardware";
import Network from "./components/products/Network";
import Software from "./components/products/Software";
import Order from '@/com/products/Order'
import Camera from "./components/products/Camera";
import Store from "./components/products/store";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Category />    
      <Camera/>
      <Inspection />
      <main className={styles.main}>
        <div className={styles.description}>
        </div>
        <div className={styles.center}>
        <Software/>
        </div>
        <div className={styles.grid}>
        </div>
      </main>
      <Order/>
      <Store/>
      <RollCall />         
      <Hardware/>
      <Network/>
      <Order/>
      <AccessControl />
      <Gate />
      <Order/>
      <OurCustomers />
      <Footer />
    </>
  );
}
