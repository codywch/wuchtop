import Link from "next/link"
import { v4 as uuidv4 } from "uuid"

export default function Taglist({allTagsData}) {
  let tagSet = new Set()
  let tagCount = {}
  allTagsData.map(data => {
    if(data.tags) {
      data.tags.map(tag => {
        let upperTag = tag.toUpperCase()
        if (tagCount[upperTag]) {
          tagCount[upperTag] += 1
        } else {
          tagCount[upperTag] = 1
        }
        tagSet.add(upperTag)
      })
    }
  })
  tagSet = Array.from(tagSet)

  return (
    <div className="flex flex-col justify-between items-center p-4 w-full">
      <div className="">
        <div className="w-full">
          <h1 className="mb-8 text-5xl text-blue-800 dark:text-blue-200">Tags</h1>
        </div>
        <div className="w-full grid grid-cols-3 gap-6">
          {tagSet.map((tag) => (
            <Link href={`/tags/${tag}`} className="w-full" key={uuidv4()}>
              <div className="hover:cursor-pointer">
                <span className="hover:text-blue-600 dark:hover:text-blue-400">{tag}</span> ({tagCount[tag]})
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}