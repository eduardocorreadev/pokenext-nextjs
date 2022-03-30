import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <Image 
                src='/images/charizard.png'
                width='300'
                height='300'
                alt='charizard'
            />
        </div>
    )
}