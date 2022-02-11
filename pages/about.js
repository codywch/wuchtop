import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Head>
        {siteTitle}
      </Head>

      <section>
        <div>
          This is `About` page
        </div>
      </section>
    </Layout>
  )
}