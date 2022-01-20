import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import Svgicon from '../components/svgicon'

export default function Home() {
	const name = 'Cody Wu'

	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section className="flex flex-col">
				<div className="flex-none">
					<div className='flex flex-col justify-center items-center'>
							<div className="flex">
								<Image
									priority
									src="/images/profile.jpg"
									className="rounded-full grow-0"
									height={144}
									width={144}
									alt={name}
								/>
							</div>
							<div>
								<h1 className="text-5xl font-bold my-2">{name}</h1>
							</div>
						</div>

						<div className="">
							<p className="p-5 text-xl font-mono font-bold">
								Hello, I'm <strong className="text-2xl">Cody</strong>.
								I'm a full-stack software engineer and an Aquascaper (Planted Aquarium).
							</p>
						</div>
					</div>

					<div className="grow">
						<div className="h-36 flex">
							<div className='basis-1/3'></div>
							<div className="flex-1 text-indigo-600 dark:text-blue-200">
								<div className="pr-3 pt-2">
									<p className="text-4xl font-bold"><span className="text-5xl font-bold">N</span>othing is real</p>
								</div>
								<div className="flex">
									<span className="basis-1/6"></span>
									<div className="relative flex-grow">
										<p className="font-bold font-mono text-3xl absolute -top-1 -left-10">if you don't</p>
									</div>
								</div>
								<div className="flex">
									<span className="basis-1/3"></span>
									<div className="relative flex-grow">
										<p className="font-bold font-mono text-4xl absolute top-3 -left-2">believe in</p>
									</div>
								</div>
								<div className="">
									<div className="relative">
										<p className="font-bold text-indigo-900 dark:text-indigo-200 font-serif text-7xl absolute top-5">
											<span className="font-thin font-sans">“</span>who you are<span className="font-thin font-sans">”</span>
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="">
							<p className="dark:text-blue-200 font-serif text-7xl">
								<span className="text-8xl font-bold">T</span>here's no tomorrow !
							</p>
						</div>
					</div>

					<div className="flex-none">
						<div className="flex flex-row items-center mb-4">
							<Svgicon
								hrefUrl="https://space.bilibili.com/10546710"
								svgPath={<svg className="svgicon-svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="7" width="18" height="13" rx="2" />  <polyline points="16 3 12 7 8 3" /></svg>}
								svgTxt="bilibili"
								newTag={true}
							/>

							<Svgicon
								hrefUrl="https://www.douyin.com/user/MS4wLjABAAAAwJQed6Ai_eZDuOtu1WomK5cxJ8qr_YJDvfEuW1s2hcg"
								svgPath={<svg className="svgicon-svg" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">  <path d="M9 18V5l12-2v13" />  <circle cx="6" cy="18" r="3" />  <circle cx="18" cy="16" r="3" /></svg>}
								svgTxt="tiktok"
								newTag={true}
							/>

							<Svgicon
								hrefUrl="https://github.com/codywch/wuchtop"
								svgPath={<svg className="svgicon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>}
								svgTxt="githug"
								newTag={true}
							/>
						</div>
					</div>
			</section>
		</Layout>
	)
}
