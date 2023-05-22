import Image from 'next/image'
import Link from 'next/link'

export default function Card({ pokemon, index }) {
  const pokemonIndex = ('000' + (index + 1)).slice(-3)

  return (
    <Link href={`/pokemon/${pokemon.name}`} legacyBehavior>
      <a>
        <div className="bg-slate-900 p-2  flex flex-col justify-center items-center rounded relative ">
          <Image
            height={150}
            width={150}
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonIndex}.png`}
            alt={pokemon.name}
          />
          <span className="absolute top-0 right-0 font-bold text-slate-400 text-4xl ">
            #{pokemonIndex}
          </span>
          <h1 className="text-amber-400 font-semibold text-xl">
            {' '}
            {pokemon.name}{' '}
          </h1>
        </div>
      </a>
    </Link>
  )
}
