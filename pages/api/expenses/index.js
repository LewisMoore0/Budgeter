import { getExpenses } from '../../../src/app/database.js' 

export default async function handler(req, res) {
  const expenses = await getExpenses()
    res.send(expenses)
  }