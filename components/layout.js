import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Top from './top'

const name = 'Cody Wu'
export const siteTitle = "Cody Wu Blog"

export default function Layout({ children, home }) {
	return (
		<div className='w-full h-screen dark:bg-gray-800'>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Personal Blog, Technology Blog" />
				<meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(
					siteTitle
				)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className='flex justify-center pt-24'>
				<Top />
				{home ? (
					<div className="flex flex-col">
						<div className="flex">
							<span className="grow"></span>
							<Image
								priority
								src="/images/profile.jpg"
								className="rounded-full grow-0"
								height={144}
								width={144}
								alt={name}
							/>
							<span className="grow"></span>
						</div>
						<div>
							<h1 className={utilStyles.heading2Xl}>{name}</h1>
						</div>
					</div>	
				) : (
					<div className="">
						<Link href="/">
							<a>
								<Image
									priority
									src="/images/profile.jpg"
									className={utilStyles.borderCircle}
									height={108}
									width={108}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/">
								<a className={utilStyles.colorInherit}>{name}</a>
							</Link>
						</h2>
					</div>
				)}
			</header>
			<main className="flex flex-col items-center w-full">
				<div className="z-20 max-w-4xl p-5">
					{children}	
				</div>
			</main>	
			<div className="fixed top-0 left-0 w-screen h-screen bg-center bg-cover opacity-100 dark:opacity-70 bg-bgimg"></div>
		</div>
	)
}