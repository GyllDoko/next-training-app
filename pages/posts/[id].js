import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../utils/fake-db'

export default function FirstPost({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.name}</title>
      </Head>
      <h1>{post.title}</h1>
      {/* <Image width={200} height={200} src="/images/profile.jpg" alt="Your Name" /> */}
      <p>{post.description}</p>

    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = getPostData(params.id)
  return {
    props: {
      post
    }
  }
}