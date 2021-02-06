import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Conste11ations
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>blog</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>About</h3>
            <p>Who I am.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Ideas</h3>
            <p>When I pen my thoughts down.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Code</h3>
            <p>When I code.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Research</h3>
            <p>Notes from researching various topics.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
      </div>
  )
}
