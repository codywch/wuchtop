import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import Svgcomp from '../components/svgcomp'

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
							<Svgcomp
								hrefUrl="https://space.bilibili.com/10546710"
								type="bilibili"
								svgTxt="bilibili"
								newTag={true}
							/>

							<Svgcomp
								hrefUrl="https://www.douyin.com/user/MS4wLjABAAAAwJQed6Ai_eZDuOtu1WomK5cxJ8qr_YJDvfEuW1s2hcg"
								type="tiktok"
								svgTxt="tiktok"
								newTag={true}
							/>

							<Svgcomp
								hrefUrl="https://github.com/codywch/wuchtop"
								type="github"
								svgTxt="githug"
								newTag={true}
							/>
						</div>
					</div>
			</section>
		</Layout>
	)
}
