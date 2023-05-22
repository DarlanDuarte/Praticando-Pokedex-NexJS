import Card from '@/components/Card/Card'
import Layout from '@/components/templates/Layout'
import { nextIcons, prevIcons } from '@/styles/icons/Icons'
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
  const [offset, setOffset] = useState(0)

  async function renderizePage(url, next) {
    const resp = await fetch(`${url}`)
    const pokemons = await resp.json()

    setOffset(next ? offset + 20 : offset - 20)
    setPokemon(pokemons)
  }

  console.log(pokemon)
  return (
    <>
      <Layout title={`Pokedex`}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 container">
          {pokemon.results.map((poke, index) => (
            <Card key={index} pokemon={poke} index={index + offset} />
          ))}
        </div>
        <div className="container flex justify-between mt-5">
          <button
            className="py-1 px-6 bg-slate-900 text-white font-semibold"
            onClick={() => renderizePage(pokemon.previous, false)}
          >
            {prevIcons()}
          </button>
          <button
            className="py-1 px-6 bg-slate-900 text-white font-semibold"
            onClick={() => renderizePage(pokemon.next, true)}
          >
            {nextIcons()}
          </button>
        </div>
      </Layout>
    </>
  )
}
