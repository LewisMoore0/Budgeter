import { getCredits } from '../../../app/api.js' 

export default async function handler(req, res) {
  const expenses = await getCredits()
    res.send(expenses)
  }