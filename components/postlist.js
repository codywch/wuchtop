import Link from 'next/link'
import Date from './date'
import Image from 'next/image'

export default function Postlist({ tag, allPostsData }) {
  if (tag) {
    tag = tag.slice(0, 1) + (tag.toLowerCase()).slice(1)
  }

  return (
    <div className="flex flex-col justify-between items-center p-4 w-full">
      <div className="max-w-[60%] min-w-full">
        <div className="w-full">
          <h1 className="mb-8 text-5xl text-blue-800 dark:text-blue-200">
            {tag ? `${tag}` : "Posts"}
          </h1>
        </div>
        <ol className="my-2 font-serif">
          {allPostsData.map(({ id, date, title, metaDesc, socialImage }) => (
            <Link href={`/posts/${id}`} className="w-full" key={id}>
              <li className="cursor-pointer">
                <div className="mb-2 last:mb-0">
                  {id != allPostsData[0].id ? (<div className="w-full mx-auto my-6 border border-gray-400 border-opacity-20"></div>) : ""}

                  <div className="flex flex-row">
                    <div className="p4 mr-8 rounded dark:bg-gray-700 bg-gray-200">
                      <div className="relative w-32 h-32 mx-auto my-auto">
                        <Image
                          className="rounded-full"
                          width={130}
                          height={130}
                          alt={title}
                          src={`/${socialImage}`}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col justify-between w-full border-y-green-500">
                      <div className="flex flex-col justify-between bm-4">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <Date dateString={date} />
                      </div>
                      <p className="max-w-fit">
                        {metaDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ol>

        {tag ? (
          <div className="flex-none my-5 w-full h-min mb-2 font-bold font-mono text-lg">
            <Link href="/tags" className="cursor-pointer">
              ← Back to tags
            </Link>
          </div>
        ) : (<></>)}
      </div>
    </div>
  )
}