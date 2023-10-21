import styles from './textarea.module.css'

export default function Textarea({type, text, name, placeholder, handleOnchange, value}) {
    return (
        <div className={styles.form_text}>
            <label htmlFor="descricao">Descrição do evento</label>
            <textarea type={type} name={name} placeholder={placeholder} onChange={handleOnchange} value={value}/>
        </div>
    )
}