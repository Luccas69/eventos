import styles from '@/components/Cadastrar/Form/form.module.css'
import Input from './Input'
import Textarea from './Textarea'
import SubmitButton from './SubmitButton'
import Label from './Label'
import DateTime from './DateTime'
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form({ btnText }) {

    const [evento, setEvento] = useState({
        titulo: '',
        descricao: '',
        dataInicio: '',
        dataFim: '',
        local: '',
        imagem: '',
    })

    function inserirEvento(e) {
        e.preventDefault()
        console.log(evento)

        function limparCampos() {
            setEvento({
                titulo: '',
                descricao: '',
                dataInicio: '',
                dataFim: '',
                local: '',
                imagem: '',
            });
        }

        axios.post('http://localhost:3001/eventos', evento)
            .then((response) => {
                console.log(response.data)
                limparCampos();
                toast.success('O Evento foi cadastrado com sucesso!')
            })
            .catch((erro) => {
                console.log(erro)
                toast.error('Ocorreu um erro ao cadastrar o evento!')
            });
    }

    return (
        <>
            <ToastContainer />
            < form onSubmit={e => inserirEvento(e)} className={styles.form}>
                <Label text="Titulo do evento" name="titulo" />
                <Input
                    type="text"
                    text="Titulo do evento"
                    name="titulo"
                    placeholder="Insira o nome do evento"
                    value={evento.titulo}
                    onChange={(e) => setEvento({ ...evento, titulo: e.target.value })}
                />
                <Label text="Descrição do evento" name="descricao" />
                <Textarea
                    type="text"
                    text="Descrição do evento"
                    name="descricao"
                    placeholder="Insira a descrição do evento"
                    value={evento.descricao}
                    onChange={(e) => setEvento({ ...evento, descricao: e.target.value })}
                />
                <Label text="Data Inicial" name="data" />
                <DateTime
                    type="date"
                    text="Data Inicial"
                    name="data"
                    placeholder="Insira a data do evento"
                    value={evento.dataInicio}
                    onChange={(e) => setEvento({ ...evento, dataInicio: e.target.value })}

                />
                <Label text="Data Final" name="data" />
                <DateTime
                    type="date"
                    text="Data Final"
                    name="data"
                    placeholder="Insira a data do evento"
                    value={evento.dataFim}
                    onChange={(e) => setEvento({ ...evento, dataFim: e.target.value })}
                />
                <Label text="Local do evento" name="local" />
                <Input
                    type="local"
                    text="Local do evento"
                    name="local"
                    placeholder="Insira o local do evento"
                    value={evento.local}
                    onChange={(e) => setEvento({ ...evento, local: e.target.value })}
                />
                <Label text="Imagem do evento" name="imagem" />
                <Input
                    type="file"
                    text="Imagem do evento"
                    name="imagem"
                    placeholder="Insira a imagem do evento"
                    value={evento.imagem}
                    onChange={(e) => setEvento({ ...evento, imagem: e.target.value })}
                />
                <SubmitButton
                    text={btnText}/>
            </form >
        </>
    )
}