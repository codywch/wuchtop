import Head from "next/head";
import { siteTitle } from "../components/layout";
import Layout from "../components/layout";
import Taglist from "../components/taglist";
import { getAllTagsData } from "../lib/tags";

export async function getStaticProps() {
  const allTagsData = getAllTagsData()
  return {
    props: {
      allTagsData
    }
  }
}

export default function Tags({ allTagsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <Taglist allTagsData={allTagsData} />
      </section>
    </Layout>
  )
}