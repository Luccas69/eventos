import Cabecalho from "@/components/Cabecalho";
import Form from "@/components/Cadastrar/Form";
import Input from "@/components/Cadastrar/Form/Input";
import Rodape from "@/components/Rodapé ";
import styles from '@/styles/Cadastrar.module.css'

export default function Cadastrar() {
    return (
        <>
            <Cabecalho />
            <div className={styles.container}>
                <h1>Cadastrar um evento</h1>
                <p>Crie seu evento</p>
                <Form />
                <Input type="text" name="titulo" id="titulo" placeholder="Digite o titulo" />
            </div>
            <Rodape />
        </>
    )
}