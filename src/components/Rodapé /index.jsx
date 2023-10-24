import Link from 'next/link'
import styles from './styles.module.css'
import { FaGithub, FaInstagram } from 'react-icons/fa'

export default function Rodape() {
    return (
        <footer className={styles.footer}>
            <h1>Desenvolvido por Luccas Rossarolla</h1>
            <div className={styles.socialmedia}>
                <Link href="https://github.com/Luccas69"> <FaGithub /> </Link>
                <Link href="https://www.instagram.com/_luccas____/"> <FaInstagram /> </Link>
            </div>

        </footer>
    )
}
