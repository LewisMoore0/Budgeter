import { getExpense } from '../../../src/app/database.js' 

export default async function handler(req, res) {
    const { query } = req
    const { id } = query;

    const expense = await getExpense(id)
    res.send(expense)
  }