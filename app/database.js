import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.HOSTNAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}).promise()

export const getExpenses = async () => {
    const [rows] = await pool.query('SELECT * FROM expenses')
    return rows;
}

export const getExpense = async (id) => {
    const [rows] = await pool.query(
        `SELECT * 
        FROM expenses
        WHERE id = ?`, [id])
        return rows[0]
}

export const createExpense = async (name, amount) => {
    const [result] = await pool.query(
        `INSERT INTO expenses (name, amount)
        VALUES (?, ?)`, [name, amount]
    )
    const id = result.insertId
    return getExpense(id)

}

export const deleteExpense = async (id) => {
    const [result] = await pool.query(
        `DELETE FROM expenses
        WHERE id = ?`, [id]
    )
    return `Expense ID: ${id} deleted`
}