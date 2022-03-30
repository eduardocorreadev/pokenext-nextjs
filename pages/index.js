import Image from 'next/image'

import Card from '../components/Card'

import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const maxItems = 255
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}?limit=${maxItems}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results
    }
  }

}

export default function Home({pokemons}) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1>
          Poke<span>Next</span>
        </h1>

        <Image 
          src='/images/pokeball.png'
          width='50'
          height='50'
          alt='Pokenext'
        />
      </div>

      <div className={styles.itemsContainer}>
        {
          pokemons.map(pokemon => (
            <Card key={pokemon.id} item={pokemon} />
          ))
        }
      </div>
    </>
  )
}
