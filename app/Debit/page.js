export async function getData() {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/Debit')
    const data = await res.json()
    return data
  }
  
  const SumDebits = (expenses) => {
    let sum = 0
    expenses.map((debit) => sum += debit.amount)
    return sum
  }
   
  export default async function Page() {
  const data = await getData()
    return (
      <main>
        {data.map((debit) => {
          return <li>{`${debit.name}, ${debit.amount}`}</li>
        })}
  
        <p> Total Debits from app: {SumDebits(data)}</p>
      </main>
    )}