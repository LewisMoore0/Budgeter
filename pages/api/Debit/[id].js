import { getDebit } from '../../../app/api.js' 

export default async function handler(req, res) {
    const { query } = req
    const { id } = query;

    const Debit = await getDebit(id)
    res.status(200).json(Debit)
  }