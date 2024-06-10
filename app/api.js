import { pool } from './database'

export const getCredits = async () => {
    const [rows] = await pool.query('SELECT * FROM Credit')
    return rows;
}

export const getCredit = async (id) => {
    const [rows] = await pool.query(
        `SELECT * 
        FROM Credit
        WHERE id = ?`, [id])
        return rows[0]
}

export const createCredit = async (name, amount) => {
    const [result] = await pool.query(
        `INSERT INTO Credit (name, amount)
        VALUES (?, ?)`, [name, amount]
    )
    const id = result.insertId
    return getCredit(id)

}

export const deleteCredit = async (id) => {
    const [result] = await pool.query(
        `DELETE FROM Credit
        WHERE id = ?`, [id]
    )
    return `Credit ID: ${id} deleted`
}

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
    return getDebit(id)

}

export const deleteDebit = async (id) => {
    const [result] = await pool.query(
        `DELETE FROM Debit
        WHERE id = ?`, [id]
    )
    return `Debit ID: ${id} deleted`
}

