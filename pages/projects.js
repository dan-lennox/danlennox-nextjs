import Head from 'next/head'
import styles from '../styles/Home.module.css'

// @todo: Reminder. NextJS now has built in lazy images.

const Projects = () => {
  const title = 'Projects';
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

        <ul>
          <li>Installation Builder Tool</li>
          <li>The GHC website itself - listing features like Search for colour</li>
          <li>B2B Ordering System</li>
          <li>Lazy Image Component - Put in own github</li>
        </ul>
      </main>
    </div>
  )
}

export default Projects;
