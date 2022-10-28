// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import { promises as fs } from 'fs';
import path from "path"
import { getFiles } from '../../utils/transformFilesToRoutes';


const handler: NextApiHandler = async (
  req,
  res
) => {

    const pathToPages = path.join(process.cwd(), "pages")

    const result = await fs.readdir(pathToPages)

    const paths: Array<string> = await getFiles(pathToPages)

    const filterPaths = paths.filter(route => {
        if (route.includes("\\api") || route.includes("\\admin-panel") || route.includes("\\_app.tsx") || route.includes("\\_document.tsx")) return false
        return true
    })

    const transformedPaths = filterPaths.map(route => {
        const newPath = route.split("\\pages")[1]
        
        const transform = newPath.split("\\").join("/")
        console.log(transform)

        if (transform === "/index.tsx") return "/"
        if (transform.includes('/index.tsx')) return transform.split("/index.tsx")[0]
        if (transform.includes(".tsx")) return transform.split(".tsx")[0]
    })

  res.status(200).json({ paths: transformedPaths })
}

export default handler


