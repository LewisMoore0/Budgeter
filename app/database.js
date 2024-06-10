import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.HOSTNAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}).promise()

export const getDebits = async () => {
    const [rows] = await pool.query('SELECT * FROM Debit')
    return rows;
}

export const getDebit = async (id) => {
    const [rows] = await pool.query(
        `SELECT * 
        FROM Debit
        WHERE id = ?`, [id])
        return rows[0]
}

export const createDebit = async (name, amount) => {
    const [result] = await pool.query(
        `INSERT INTO Debit (name, amount)
        VALUES (?, ?)`, [name, amount]
    )
    const id = result.insertId
    return getExpense(id)

}

export const deleteDebit = async (id) => {
    const [result] = await pool.query(
        `DELETE FROM Debit
        WHERE id = ?`, [id]
    )
    return `Debit ID: ${id} deleted`
}