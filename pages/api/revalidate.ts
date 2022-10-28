import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
    // Check for secret to confirm this is a valid request
    
    try {
        console.log(req.query.page)
      await res.revalidate(req.query.page as string)
      return res.json({ revalidated: true })
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      console.log(err)
      return res.status(500).send('Error revalidating')
    }
  }

export default handler