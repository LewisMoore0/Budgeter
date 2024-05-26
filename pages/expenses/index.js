export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/expenses')
  const expenses = await res.json()
  // Pass data to the page via props
  return { props: { expenses } }
}

const SumExpenses = (expenses) => {
  let sum = 0
  expenses.map((expense) => sum += expense.amount)
  return sum
}
 
export default function Page({ expenses }) {

  return (
    <main>
      {expenses.map((expense) => {
        return <li>{`${expense.name}, ${expense.amount}`}</li>
      })}

      <p> Total Expenses: {SumExpenses(expenses)}</p>
    </main>
  )}