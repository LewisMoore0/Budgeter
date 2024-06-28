import { getDebits } from '../../api.js' 

export default async function handler(req, res) {
  const expenses = await getDebits()
    res.send(expenses)
  }