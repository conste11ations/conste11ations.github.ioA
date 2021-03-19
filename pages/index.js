import Head from "next/head";
import { motion} from "framer-motion";
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

        <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
          <p className={styles.description}>
            <code className={styles.code}>blog</code>
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            animate={{ scale: [1.1, 1] }}
            transition={{ duration: 1 }}
            className={styles.card}
          >
            <h3>
              <Link href="/about">About</Link>
            </h3>
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            >
              <p>
                <a href="https://github.com/conste11ations/">
                  <img src="github.svg" alt="github" />
                </a>
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ scale: [1.1, 1] }}
            transition={{ duration: 1 }}
            className={styles.card}
          >
              <a href="#">
                <h3>Ideas</h3>
                <p>When I pen my thoughts down</p>
              </a>
          </motion.div>
          <motion.div
            animate={{ scale: [1.1, 1] }}
            transition={{ duration: 1 }}
            className={styles.card}
          >
            <a href="#">
              <h3>Code</h3>
              <p>When I code or explain tech things</p>
            </a>
          </motion.div>
          <motion.div
            animate={{ scale: [1.1, 1] }}
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
