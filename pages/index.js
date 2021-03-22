import Head from 'next/head'
import styles from '../styles/Home.module.css'

// @todo: Favicon.

const Home = () => {
  const title = 'Hello there!';
  return (
   <div id="page">
      <Head>
        <title>Dan Lennox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <code className={styles.code}>{title}</code>
        </h1>

        <p className={styles.description}>
          Hi, I’m Dan, a software engineer with twelve years experience building for the web. I’m passionate about javascript, rapid prototyping, machine learning and anything to do with gamification.
          This should read less like a linked in profile. It's a short personal blurb. These days I'm frontend focussed but backend proficient, with experience across modern stack.
          Jamstack.
        </p>
      </main>
    </div>
  )
}

export default Home;