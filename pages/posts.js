import Head from "next/head";
import { getSortedPostsData } from '../lib/posts'
import Postlist from "../components/postlist"
import Layout, { siteTitle } from '../components/layout'

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}

export default function Posts({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <Postlist allPostsData={allPostsData} />
      </section> 
    </Layout>
  )
}