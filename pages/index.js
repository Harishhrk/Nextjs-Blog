import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Strong in Data Structures with intuitive problem-solving skills. 
Proficient in JAVA, JAVASCRIPT, and SQL. Passionate about 
implementing and launching new projects.</p>
        <p>
        My Aim is always is to build high-quality, innovative, and fully performing software that complies with coding standards and technical design, keeping in mind that software is ultimately about people, so having the ability to understand users is a valuable (and essential) perspective. {' '}
          <a href="https://harishportfolio.netlify.app/">Portfolio</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              {date}
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
