import Cabecalho from "@/components/Cabecalho";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Input from '@/components/Cadastrar/Form/Input';
import Textarea from '@/components/Cadastrar/Form/Textarea';
import DateTime from '@/components/Cadastrar/Form/DateTime';
import Label from '@/components/Cadastrar/Form/Label';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '@/styles/Alterar.module.css';
import SubmitButton from "@/components/Cadastrar/Form/SubmitButton";

export default function AlterarPage() {
    const [evento, setEvento] = useState({
        titulo: '',
        descricao: '',
        dataInicio: '',
        dataFim: '',
        local: '',
        imagem: '',
    });

    const router = useRouter();

    useEffect(() => {
        const id = router.query.id;

        if (id) {
            axios.get(`http://localhost:3001/eventos/${id}`)
                .then(resultado => setEvento(resultado.data));
        }
    }, [router]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEvento({ ...evento, [name]: value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imageDataUrl = e.target.result;
                setEvento({ ...evento, imagem: imageDataUrl });
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = router.query.id;

        axios.patch(`http://localhost:3001/eventos/${id}`, evento)
            .then(resultado => {
                setEvento(resultado.data);
                toast.success('O evento foi alterado com sucesso!');
            })
            .catch((erro) => {
                console.log(erro);
                toast.error('Ocorreu um erro ao alterar o evento!');
            });
    };

    return (
        <div>
            <ToastContainer />
            <Cabecalho />
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <Label text="Titulo do evento" name="titulo" />
                    <Input type="text" name="titulo" value={evento.titulo} onChange={handleInputChange} />
                    <Label text="Descrição do evento" name="descricao" />
                    <Textarea name="descricao" value={evento.descricao} onChange={handleInputChange} />
                    <Label text="Data Inicial" name="data" />
                    Data de Início:
                    <DateTime type="date" name="dataInicio" value={evento.dataInicio} onChange={handleInputChange} />
                    <Label text="Data Final" name="data" />
                    <DateTime type="date" name="dataFim" value={evento.dataFim} onChange={handleInputChange} />
                    <Label text="Local do evento" name="local" />
                    <Input type="text" name="local" value={evento.local} onChange={handleInputChange} />
                    <Label text="Imagem do evento" name="imagem" />
                    <Input
                        type="file"
                        id="imagem"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    <SubmitButton text="Alterar" />
                </form>
            </div>
        </div>
    );
}
