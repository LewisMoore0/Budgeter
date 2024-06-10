// import { useRouter } from 'next/router'
// export async function getServerSideProps(context) {
//     console.log(context, 'ssp context')
//     // Fetch data from external API
//     const res = await fetch('http://localhost:3000/api/Debit/')
//     const debits = await res.json()
//     // Pass data to the page via props
//     return { props: { debits } }
//   }
  

// export default function Page ({ debits }) {
//     const router = useRouter()
//     const { id } = router.query

//     return (
//         <main>
//             <p> Debit</p>
//         </main>
//     )
// }