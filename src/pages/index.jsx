import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodapé ";
import styles from '@/styles/Home.module.css'
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Cabecalho />
      <div className={styles.container}>
        <h1>Página Home</h1>
        <Link href="/cadastrar"> Cadastrar Eventos</Link>
        <Link href="/listar"> Listar Eventos</Link>
      </div>
      <Rodape />
    </div>
  )
}