import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getAllData } from '../utils/fake-db'

export async function getStaticProps() {
  const data = getAllData()
  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Full-stack developper</p>
        <p>
          (This is a sample website - I’ll build for Next.Js trainning)
        </p>
      </section>
      <section>
        {data.map((item, index) => (
          <ul key={index} className={utilStyles.list}>
            <li className={utilStyles.listItem}><Link href={`/posts/${item.name}`}><a >{item.title}</a></Link></li>
            <li>{item.description}</li>
            <li>{item.date}</li>
            <hr />
          </ul>
        ))}
      </section>
    </Layout>
  )
}