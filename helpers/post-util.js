import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

function getData(fileName) {
  const markDownFileName = fileName + '.md'
  const fullPath = path.join(process.cwd(), 'posts', markDownFileName)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)
  console.log('** contents', content)
  return {
    ...data,
    imgFullPath: `/images/posts/${fileName}/${fileName +'.png'}`,
    slug: fileName,
    content: content
  }
}

export const getAllPostFileNames = () => {
  const workingDir = process.cwd()
  const filePath =  path.join(workingDir, 'posts')
  const fileNames = fs.readdirSync(filePath)
  console.log('** fileNames:', fileNames)
  return fileNames.map(fileName => fileName.replace('.md', ''))
}

export const getAllPost = () => {
  const fileNamesWithoutExt = getAllPostFileNames()
  let allFileData = []
  
  for (const file of fileNamesWithoutExt) {
    const data = getData(file)
    if (data) {
      allFileData.push(data)
    }
  }

  return allFileData
}

export const getFeaturedPost = () => {
  const fileNamesWithoutExt = getAllPostFileNames()
  let allFileData = []

  for (const file of fileNamesWithoutExt) {
    const data = getData(file) 
    if(data.isFeatured) allFileData.push(data)
  }

  return allFileData
}

export const getSpecificPost = (fileName) => {
  const posts = getAllPost()
  return posts.find(post => post.slug === fileName )
}