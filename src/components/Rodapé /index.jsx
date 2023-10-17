import Link from 'next/link'
import styles from './styles.module.css'

export default function Rodape() {
    return (
        <footer className={styles.footer}>
            <p>Desenvolvido por
                <Link href="https://github.com/Luccas69" className={styles.Link}> Luccas dos Rossarolla</Link>
            </p>
        </footer>
    )
}