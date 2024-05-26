import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.HOSTNAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}).promise()

const getAllExpenses = async () => {
    const [rows] = await pool.query('SELECT * FROM expenses')
    return rows;
}

const getExpense = async (id) => {
    const [rows] = await pool.query(
        `SELECT * 
        FROM expenses
        WHERE id = ?`, [id])
        return rows[0]
}

const createExpense = async (name, amount) => {
    const [result] = await pool.query(
        `INSERT INTO expenses (name, amount)
        VALUES (?, ?)`, [name, amount]
    )
    const id = result.insertId
    return getExpense(id)

}