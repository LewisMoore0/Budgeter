import { getCredit } from '../../../app/api.js' 

export default async function handler(req, res) {
    const { query } = req
    const { id } = query;

    const Credit = await getCredit(id)
    res.status(200).json(Credit)
  }