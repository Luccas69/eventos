import styles from './styles.module.css';
import Link from 'next/link';

export default function Cabecalho() {

    return (
        <header className={styles.header}>
            <div>
                <h1>Plataforma de Eventos</h1>
            </div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/eventos">Eventos</Link>
                <Link href="/contato">Contato</Link>
            </div>
        </header>
    )
};