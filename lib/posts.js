import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { getAllTagsData } from './tags'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
	// Get file names under  /posts
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = fileNames.map(fileName => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '')

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents)

		// Combine the data with the id
		return {
			id,
			...matterResult.data
		}
	})

	// Sort posts by date
	return allPostsData.sort(({ date: a}, { date: b}) => {
		if (a < b) {
			return 1
		} else if (a > b){
			return -1
		} else {
			return 0
		}
	})
}

export function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDirectory)

	return fileNames.map(fileName => {
		return {
			params: {
				id: fileName.replace(/\.md$/, '')
			}
		}
	})
}

export function getAllPostIdsByTag() {
	const allTagsData = getAllTagsData()

	let tagSet = new Set()
	allTagsData.map(data => {
		if (data.tags) {
			data.tags.map(tag => {
				let upperTag = tag.toUpperCase()
				tagSet.add(upperTag)
			})
		}
	})
	tagSet = Array.from(tagSet)

	return tagSet.map(tag => {
		return {
			params: {
				tag: tag,
			}
		}
	})
}

export async function getPostData(id) {
	const fullPath = path.join(postsDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents)

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content)
	const contentHtml = processedContent.toString()

	// Combine the data with the id
	return {
		id,
		contentHtml,
		markdown: matterResult.content,
		...matterResult.data
	}
}

// Get specific tags posts list
export function getSortedPostsDataByTag(tag) {
	// Get file names under  /posts
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = fileNames.reduce((result, fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '')

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents)

		if ((matterResult.data.tags).includes(tag.toLowerCase())) {
			result.push({
				id,
				...matterResult.data
			})
		}
		return result
	}, [])

	// Sort posts by date
	return allPostsData.sort(({ date: a}, { date: b}) => {
		if (a < b) {
			return 1
		} else if (a > b){
			return -1
		} else {
			return 0
		}
	})
}