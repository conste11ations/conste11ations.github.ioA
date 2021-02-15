import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Conste11ations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Conste11ations</h1>

        <p className={styles.description}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <code className={styles.code}>blog</code>
          </motion.div>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>About</h3>
            <p>
              <a href="https://github.com/conste11ations/">
                <img src="github.svg" alt="github" />
              </a>
            </p>
          </div>

          <a href="#" className={styles.card}>
            <h3>Ideas</h3>
            <p>When I pen my thoughts down</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Code</h3>
            <p>When I code or explain tech things</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Research</h3>
            <p>After researching various topics</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
