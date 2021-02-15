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
          <motion.div
            animate={{ scale: 1.1 }}
            transition={{ duration: 1 }}
            className={styles.card}
          >
            <h3>
              <Link href="/about">About</Link>
            </h3>
            <p>
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
              >
                <a href="https://github.com/conste11ations/">
                  <img src="github.svg" alt="github" />
                </a>
              </motion.div>
            </p>
          </motion.div>
          <motion.div
            animate={{ scale: 1.1 }}
            transition={{ duration: 1 }}
            className={styles.card}
          >
            <a href="#">
              <h3>Ideas</h3>
              <p>When I pen my thoughts down</p>
            </a>
          </motion.div>
          <motion.div
            animate={{ scale: 1.1 }}
            transition={{ duration: 1 }}
            className={styles.card}
          >
            <a href="#">
              <h3>Code</h3>
              <p>When I code or explain tech things</p>
            </a>
          </motion.div>
          <motion.div
            animate={{ scale: 1.1 }}
            transition={{ duration: 1 }}
            className={styles.card}
          >
            <a href="#">
              <h3>Research</h3>
              <p>After researching various topics</p>
            </a>
          </motion.div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
