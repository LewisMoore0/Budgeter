export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/Credit')
    const Credits = await res.json()
    // Pass data to the page via props
    return { props: { Credits } }
  }
  
  const SumCredits = (expenses) => {
    let sum = 0
    expenses.map((Credit) => sum += Credit.amount)
    return sum
  }
   
  export default function Page({ Credits }) {
  
    return (
      <main>
        {Credits.map((Credit) => {
          return <li>{`${Credit.name}, ${Credit.amount}`}</li>
        })}
  
        <p> Total Credits: {SumCredits(Credits)}</p>
      </main>
    )}