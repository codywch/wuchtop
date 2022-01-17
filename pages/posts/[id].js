import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <Layout> 
      {/* Add this <Head> tag */}
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className="{utilStyles.headingXl}">{postData.title}</h1>
      </article>
      <div className="{utilStyles.lightText}">
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

