import styles from '@/components/Cadastrar/Form/form.module.css'
import Input from './Input'
import Textarea from './Textarea'
import SubmitButton from './SubmitButton'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Form({ btnText }) {

    const [eventos, setEventos] = useState([
        {
            titulo: '',
            descricao: '',
            dataInicio: '',
            dataFim: '',
            local: '',
            imagem: '',
            imagemg: "",
        }
    ]);

    const [mensagem, setMensagem] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setMensagem('')
        }, 3000)
    }, [mensagem])

    function InserirEvento(e) {
        e.preventDefault()

        axios.post('http://localhost:3001/eventos', eventos)
            .then(resultado => {
                console.log(resultado.data)
                setEventos({
                    titulo: '',
                    descricao: '',
                    dataInicio: '',
                    dataFim: '',
                    local: '',
                    imagem: '',
                    imagemg: "",
                })
                setMensagem('Evento cadastrado com sucesso!')
            })
            .catch(erro => console.log(erro))
    }

    return (
        <form className={styles.form} onSubmit={e => InserirEvento(e)}>
            <Input
                type="text"
                text="Titulo do evento"
                name="titulo"
                placeholder="Insira o nome do evento"
                value={eventos.titulo}
                onChange={e => setEventos({ ...eventos, titulo: e.target.value })} />
            <Textarea
                type="text"
                text="Descrição do evento"
                name="descricao"
                placeholder="Insira a descrição do evento"
                value={eventos.descricao}
                onChange={e => setEventos({ ...eventos, descricao: e.target.value })} />
            <Input
                type="date"
                text="Data Inicial"
                name="data"
                placeholder="Insira a data do evento"
                value={eventos.dataInicio}
                onChange={e => setEventos({ ...eventos, dataInicio: e.target.value })} />
            <Input
                type="date"
                text="Data Final"
                name="data"
                placeholder="Insira a data do evento"
                value={eventos.dataFim}
                onChange={e => setEventos({ ...eventos, dataFim: e.target.value })} />
            <Input
                type="local"
                text="Local do evento"
                name="local"
                placeholder="Insira o local do evento"
                value={eventos.local}
                onChange={e => setEventos({ ...eventos, local: e.targe.value })} />
            <Input
                type="file"
                text="Imagem do evento"
                name="imagem"
                placeholder="Insira a imagem do evento"
                class="btn btn-sucess"
                accept="image/png, image/jpeg"
                multiple value={eventos.imagem}
                onChange={e => setEventos({ ...eventos, imagem: e.targe.value })} />
            <SubmitButton
                text={btnText} />
        </form>
    )
}


