import { useEffect } from  "react"

export default function Home(props) {
  console.log(props.episodes)
 // useEffect(() => {
 //   fetch('http://localhost:3333/episodes')
 //       .then(response => response.json())
 //       .then(data => console.log(data))
 // }, [])

  return (
      <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
      </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
      revalidade: 60 * 60 * 8,
  }
}