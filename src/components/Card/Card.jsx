import Image from 'next/image'

export async function getServerSideProps() {}

export default function Card({ pokemon, index }) {
  const pokemonIndex = ('000' + (index + 1)).slice(-3)

  return (
    <div className="">
      <div>
        <Image
          height={150}
          width={150}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonIndex}.png`}
          alt={pokemon.name}
        />
        <h1> {pokemon.name} </h1>
      </div>
    </div>
  )
}
