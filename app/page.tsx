import { Footer } from "@/com/layout/Footer";
import styles from "./page.module.css";
import { Header } from '@/com/layout/Header'
import Team from "@/com/team/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>

        <div className={styles.description}>
        </div>

        <div className={styles.center}>
          <h1>شکوفالند</h1>
        </div>

        <div className={styles.grid}>
        </div>

      </main>
      <Team />
      <Footer />
    </>
  );
}
