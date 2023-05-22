import Layout from '@/components/templates/Layout'
import Image from 'next/image'

export async function getServerSideProps(context) {
  const api = `https://pokeapi.co/api/v2/pokemon`
  const resp = await fetch(`${api}/${context.query.name}`)
  const pokemon = await resp.json()

  return {
    props: {
      pokemon,
    },
  }
}

export default function Pokemon({ pokemon }) {
  const indexPokemon = ('000' + pokemon.id).slice(-3)
  const namePokemon = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  console.log(pokemon)

  function rederizarTypePokemon() {
    return pokemon.types.map((type, index) => (
      <li
        key={index}
        className="text-3xl text-emerald-400 font-semibold mx-10 "
      >
        {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
      </li>
    ))
  }

  function renderizarStatus() {
    return pokemon.stats.map((pokeStatus, index) => (
      <div
        key={index}
        className={`my-3 bg-slate-500  border-solid border-2 border-slate-400`}
        style={{ width: `${pokeStatus.base_stat}%` }}
      >
        {pokeStatus.base_stat}
      </div>
    ))
  }

  return (
    <Layout title={namePokemon}>
      <div className="flex flex-col justify-center items-center">
        <span
          className={`absolute font-bold text-slate-400 text-[250px] -z-10`}
        >
          #{indexPokemon}
        </span>
        <Image
          height={400}
          width={400}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${indexPokemon}.png`}
          alt={pokemon.name}
        />
        <h1 className="font-bold text-amber-400 text-4xl"> {namePokemon} </h1>
      </div>
      <div>
        <ul className="flex justify-center items-center bg-slate-900 mt-5 py-2 px-2 rounded">
          {rederizarTypePokemon()}
        </ul>
        <div className={` text-white font-semibold rounded   `}>
          <div className={`bg-slate-900 p-1  `}>{renderizarStatus()}</div>
        </div>
      </div>
    </Layout>
  )
}
