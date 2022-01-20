import Link from 'next/link'
import Date from './date'

export default function Postlist({ allPostsData }) {
  return (
    <div className="flex flex-col justify-between items-center p-4 w-full max-w-2xl">
      <div className="w-full">
        <h1 className="mb-8 text-5xl text-blue-800 dark:text-blue-200">Posts</h1>
      </div>
      <ol className="my-2 font-serif">
        {allPostsData.map(({ id, date, title }) => (
          <Link href={`/posts/${id}`} className="w-full" key={id}>
              <li className="cursor-pointer">
                <div className="mb-2 last:mb-0">
                  {id != allPostsData[0].id ? (<div className="w-full mx-auto my-6 border border-gray-400 border-opacity-20"></div>) : ""}

                  <div className="flex flex-row">
                    <div className="p4 mr-8 rounded dark:bg-gray-700 bg-lime-200">
                      <div className="relative w-32 h-32 mx-auto my-auto">
                        <span className="p-4 text-center"></span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between w-full border-y-green-500">
                      <div className="flex flex-col justify-between bm-4">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <Date dateString={date} />
                      </div>
                      <p>
                        To help prevent giscus from hitting GitHub API's rate limit, we cache the access tokens in Supabase. Here's how I did it.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
          </Link>
        ))}
      </ol>
    </div>
  )
}