import Link from 'next/link'
import Date from '../components/date'
import Head from 'next/head'
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

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p className="">
					Hello, I'm <b>Cody</b>.
					I'm a full-stack software engineer and a Aquascaper(Planted Aquarium).
				</p>
				<p className="">If you like aquarium or fish too. You can contact me on
					<a target="_blank" href="https://space.bilibili.com/10546710"> Bilibili</a> or
					<a target="_blank" href="https://www.douyin.com/user/MS4wLjABAAAAwJQed6Ai_eZDuOtu1WomK5cxJ8qr_YJDvfEuW1s2hcg"> Tik Tok</a>
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
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}
