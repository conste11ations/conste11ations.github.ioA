import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import Lottie from 'react-lottie';
import OctopusLottie from '../lotties/octopus';
import styles from "../styles/Home.module.css";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: OctopusLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

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

        <div>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
          />
        </div>

        <div className={styles.grid}>
          <motion.div
            animate={{ scale: [1.1, 1] }}
            transition={{ duration: 1 }}
            className={styles.card}
          >
            <h3>About</h3>
            {/* <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            >
              <p>
                <Link href="https://github.com/conste11ations/">
                  <img src="github.svg" alt="github" />
                </Link>
              </p>
            </motion.div> */}
          </motion.div>
          <motion.div
            animate={{ scale: [1.1, 1] }}
            transition={{ duration: 1 }}
            className={styles.card}
          >
            <h3>Ideas</h3>
            <p>When I pen my thoughts down</p>
          </motion.div>
          <motion.div
            animate={{ scale: [1.1, 1] }}
            transition={{ duration: 1 }}
            className={styles.card}
          >
            <h3>Code</h3>
            <p>I like to ELI5 because we all deserve a clear explanation</p>
            <ul>
              <li>
                <a
                  href="code/the-magic-of-the-rxjs-share-operator"
                  className="special-link"
                >
                  The magic of the RxJS share operator
                </a>
              </li>
              <li>
                <a href="#" className="special-link">
                  Zones, Zone.js, NgZone
                </a>
              </li>
              <li>
                <a href="#" className="special-link">
                  Change Detection in Angular
                </a>
              </li>
              <li>
                <a href="#" className="special-link">
                  Alternatives to the Async Pipe
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            animate={{ scale: [1.1, 1] }}
            transition={{ duration: 1 }}
            className={styles.card}
          >
            <h3>Research</h3>
            <p>After researching various topics</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
