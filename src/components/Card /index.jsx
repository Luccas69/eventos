import Link from "next/link"
import styles from './styles.module.css'

export default function Card(id, titulo, dataInicio, dataFim, local, imagem) {

    return (
        <div className={styles.Card}>
            <Link href={`/eventos/${id}`}>
                <h2 className={styles.cardTitulo}>{titulo}</h2>
                <div>Data Inicio: {dataInicio}</div>
                <div>Data Fim: {dataFim}</div>
                <div>Local: {local}</div>
                <img src={imagem} alt={titulo} />
            </Link>
        </div>
    )
}