import styles from '@/styles/id.module.css'
import Cabecalho from "@/components/Cabecalho";
import { useEffect } from 'react';
import { useState } from 'react';   
import { useRouter } from 'next/router';
import axios from 'axios';

export default function AlterarPage() {

    const [evento, setEvento] = useState({})

    const router = useRouter()

    useEffect(() => {

        const id = router.query.id

        if (id) {
            console.log('executou')
            axios.patch(`http://localhost:3001/eventos/${id}`)
                .then(resultado => setEvento(resultado.data))
        }
    }, [router])


    return (
        <div>
            <Cabecalho />
            <div className={styles.container}>
                <h1>Alterando o evento</h1>


            </div>
        </div>
    )
}