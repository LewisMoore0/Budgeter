export async function getData() {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/Credit')
    const data = await res.json()
    // Pass data to the page via props
    return data
  }
  
  const SumCredits = (expenses) => {
    let sum = 0
    expenses.map((Credit) => sum += Credit.amount)
    return sum
  }
   
  export default async function Page() {
  const data = await getData()
    return (
      <main>
        {data.map((Credit) => {
          return <li>{`${Credit.name}, ${Credit.amount}`}</li>
        })}
  
        <p> Total Credits: {SumCredits(data)}</p>
      </main>
    )}