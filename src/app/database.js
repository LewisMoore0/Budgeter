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

const expenses = await getAllExpenses()
console.log(expenses)