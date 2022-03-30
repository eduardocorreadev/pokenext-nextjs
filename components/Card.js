import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Card.module.css'

export default function Card({item}) {
    return (
        <div className={styles.card}>
            <Image 
                src={`https://cdn.traction.one/pokedex/pokemon/${item.id}.png`}
                width='120'
                height='120'
                alt={item.name}
            />

            <p>#{item.id}</p>
            <h3>{item.name}</h3>
            <Link href={`/pokemon/${item.id}`}>
                <a>Detalhes</a>
            </Link>
        </div>
    )
}