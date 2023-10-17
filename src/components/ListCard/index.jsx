import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from "@/components/Card "
import styles from './styles.module.css'


export default function ListCard() {

    const [eventos, setEventos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/eventos')
            .then(response => setEventos(response.data))
    }
        , [])

    function formatarData(data) {
        const [ano, mes, dia] = data.split('-')
        return `${dia}/${mes}/${ano}`;
    }

    return (
        <div className={styles.ListCard}>
            {eventos.map(e => (
                <Card
                    id={e.id}
                    titulo={e.titulo}
                    dataIniicio={formatarData(e.dataInicio)}
                    dataFim={formatarData(e.dataFim)}
                    local={e.local}
                    imagem={e.imagem}
                />
            ))}
        </div>
    )
}