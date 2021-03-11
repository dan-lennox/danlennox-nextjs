import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  const title = 'Personal website of Dan Lennox';
  return (
   <div id="page">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {title}
        </h1>

        <p className={styles.description}>
          Coming soon
          <code className={styles.code}>(definitely!!!!)</code>
        </p>
      </main>
    </div>
  )
}

export default Home;