import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  let tags = Array.from(postData.tags)
  console.log(tags)
  return (
    <Layout> 
      {/* Add this <Head> tag */}
      <Head>
        <title>{postData.title}</title>
      </Head>

      <section className="max-w-xl px-5 flex flex-col justify-between items-center">
        <article className="grow py-5">
          <h1 className="text-5xl font-bold mb-4 leading-tight">{postData.title}</h1>
          <div className="font-bold text-xl">
            <Date dateString={postData.date} />
          </div>
          <div className="flex flex-row mt-2">
            {tags.map(tag => (
              <Link href={`/tags/${tag.toUpperCase()}`} key={tag}>
                <div className="hover:cursor-pointer hover:bg-blue-200 dark:hover:bg-gray-600 border rounded mr-2 px-2 py-1">{tag}</div>
              </Link>
            ))}
          </div>

          <div className="mt-5 leading-loose" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> 
        </article>

        <div className="flex-none my-5 w-full h-min mb-2 font-bold font-mono text-lg">
          <Link href="/posts" className="cursor-pointer">
            ← Back to posts
          </Link>
        </div>
      </section> 
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

