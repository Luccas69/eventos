import Cabecalho from "@/components/Cabecalho";
import Form from "@/components/Cadastrar/Form";
import Rodape from "@/components/Rodapé ";
import styles from '@/styles/Formulario.module.css'

export default function Cadastrar() {

    return (
        <>
            <Cabecalho />
            <div className={styles.container}>
                <Form btnText="Cadastrar" />
            </div>
            <Rodape />
        </>
    )
}