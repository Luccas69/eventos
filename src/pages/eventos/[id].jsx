import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from '@/styles/id.module.css'
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodapé ";
import Link from "next/link";
import Image from "next/image";

export default function EventosHome() {

    const [evento, setEvento] = useState({})

    const router = useRouter()

    useEffect(() => {

        const id = router.query.id

        if (id) {
            console.log('executou')
            axios.get(`http://localhost:3001/eventos/${id}`)
                .then(resultado => setEvento(resultado.data))
        }
    }, [router])

    return (
        <>
            <Cabecalho />
            <div className={styles.container}>
                <h1>{evento.titulo}</h1>
                <Image src={evento.imagem} alt="imagem" width={500} height={500}/>
                <p>Descrição do Evento:<br /> {evento.descricao}</p>
                <h2>Data Inicio: {evento.dataInicio}<br />
                    Data fim: {evento.dataFim}</h2>
                <h3>Local: {evento.local}</h3>
                <Link href={`/eventos/alterar/${evento.id}`}>Alterar Evento</Link>
            </div>
            <Rodape />
        </>
    );
}