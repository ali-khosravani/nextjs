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

import Camera from "./components/products/Camera";
import Store from "./components/products/store";

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
      <Software />
      <Hardware />
      <Network />
      <Camera />
      <Store />
      <OurCustomers />

      {/* <main className={styles.main}>
        <div className={styles.description}>
        </div>
        <div className={styles.center}>        
        </div>
        <div className={styles.grid}>
        </div>
      </main> */}

      <Footer />
    </>
  );
}
