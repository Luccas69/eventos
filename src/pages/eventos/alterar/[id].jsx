import AlterarComp from "@/components/Alterar";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodapé ";
import styles from '@/styles/Formulario.module.css'
export default function AlterarPage() {
    return (
        <>
            <Cabecalho />
            <div className={styles.container}>
                <AlterarComp />
            </div>
            <Rodape />
        </>
    )
}