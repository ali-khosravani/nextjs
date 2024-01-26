import Link from "next/link";
import { Footer } from "./components/layout/Footer";
import styles from "./page.module.css";
import { Header } from '@/com/layout/Header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          Container
        </div>
      </div>

      <div className={styles.center}>
        Logo
      </div>

      <div className={styles.grid}>
        <Link href={'/Faq'}  className={styles.card} target="_blank"
          rel="noopener noreferrer"> 
        
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        
        </Link>
       

        <a
          href="/blog"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://shekofa-land.ir"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://shekofa-land.ir"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
      <Footer />
    </main>
  );
}
