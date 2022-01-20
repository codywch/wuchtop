import Head from 'next/head'
import Top from './top'
import Footer from './footer'

export const siteTitle = "Cody Wu Blog"

export default function Layout({ children }) {
	return (
		<div className="flex flex-col justify-between items-center min-h-screen h-full w-full dark:bg-gray-900">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Personal Blog, Technology Blog" />
				<meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(
					siteTitle
				)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
	
			<Top home />	

			<div className="flex-none w-full h-20" />

			<main className="flex z-10 max-w-4xl grow">	
				{children}
			</main>

			<Footer />
			<div className="fixed z-0 top-0 left-0 w-screen h-screen bg-center bg-cover opacity-100 dark:opacity-70 bg-bgimg"></div>
		</div>
	)
}