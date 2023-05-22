import Card from '@/components/Card/Card'
import Layout from '@/components/templates/Layout'
import { useState } from 'react'

export async function getStaticProps(context) {
  const api = `https://pokeapi.co/api/v2/pokemon`
  const resp = await fetch(`${api}`)
  const initialPokemon = await resp.json()

  return {
    props: {
      initialPokemon,
    },
  }
}

export default function Home({ initialPokemon }) {
  const [pokemon, setPokemon] = useState(initialPokemon)
  console.log(pokemon)
  return (
    <>
      <Layout title={`Pokedex`}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 container">
          {pokemon.results.map((poke, index) => (
            <Card key={index} pokemon={poke} index={index} />
          ))}
        </div>
      </Layout>
    </>
  )
}
