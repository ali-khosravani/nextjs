import { Footer } from "@/com/layout/Footer";
import styles from "./page.module.css";
import { Header } from '@/com/layout/Header'
import OurTeam from "@/com/team/OurTeam";
import OurCustomers from "./components/customers/OurCustomers";
import { Slider } from "./components/slider/Slider";

export default function Home() {  
  return (
    <>
      <Header />
      <Slider />
      <main className={styles.main}>
        <div className={styles.description}>
        </div>
        <div className={styles.center}>
          <h1>شکوفالند</h1>
        </div>
        <div className={styles.grid}>
        </div>
      </main>
      <OurCustomers />
      <OurTeam />
      <Footer />
    </>
  );
}
