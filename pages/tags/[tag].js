import Head from "next/head";
import Postlist from "../../components/postlist";
import { getSortedPostsDataByTag, getAllPostIdsByTag } from "../../lib/posts";
import Layout, { siteTitle } from '../../components/layout'

export async function getStaticProps({ params }) {
	const allPostsData = getSortedPostsDataByTag(params.tag)
	return {
		props: {
      tag: params.tag,
			allPostsData
		}
	}
}

export async function getStaticPaths() {
  const paths = getAllPostIdsByTag()
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

export default function Tag({ tag, allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <Postlist tag={tag} allPostsData={allPostsData} />
      </section> 
    </Layout>
  )
}