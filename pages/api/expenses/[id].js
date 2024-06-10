import { getExpense } from '../../../app/database.js' 

export default async function handler(req, res) {
    const { query } = req
    const { id } = query;

    const expense = await getExpense(id)
    res.status(200).json(expense)
  }