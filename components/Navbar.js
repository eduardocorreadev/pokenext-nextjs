import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image 
                    src='/images/pokeball.png'
                    width='30'
                    height='30'
                    alt='PokeNext Logo'
                />
                <h1>PokeNext</h1>
            </div>

            <ul className={styles.linkItems}>
                <li>
                    <Link href='/'>
                        <a>Ínicio</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <a>Sobre</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}