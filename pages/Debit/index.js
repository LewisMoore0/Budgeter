export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/Debit')
  const debits = await res.json()
  // Pass data to the page via props
  return { props: { debits } }
}

const SumDebits = (expenses) => {
  let sum = 0
  expenses.map((debit) => sum += debit.amount)
  return sum
}
 
export default function Page({ debits }) {

  return (
    <main>
      {debits.map((debit) => {
        return <li>{`${debit.name}, ${debit.amount}`}</li>
      })}

      <p> Total Debits: {SumDebits(debits)}</p>
    </main>
  )}