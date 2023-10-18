import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodapé ";
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Cabecalho/>
      <h1 className={styles.inicio}>Bem vindo a Página Home </h1>
      <Rodape/>
    </div>
  )
}