import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
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
            <h3>
              <Link href="/about">About</Link>
            </h3>
            <p>
              <a href="https://github.com/conste11ations/">
                <img src="github.svg" alt="github" />
              </a>
            </p>
          </div>
          <div className={styles.card}>
            <a href="#">
              <h3>Ideas</h3>
              <p>When I pen my thoughts down</p>
            </a>
          </div>
          <div className={styles.card}>
            <a href="#">
              <h3>Code</h3>
              <p>When I code or explain tech things</p>
            </a>
          </div>
          <div className={styles.card}>
            <a href="#">
              <h3>Research</h3>
              <p>After researching various topics</p>
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
