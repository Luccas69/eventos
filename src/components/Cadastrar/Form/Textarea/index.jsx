import styles from './textarea.module.css'

export default function Textarea({type, text, name, placeholder, onChange, value}) {
    return (
        <div className={styles.form_text}>
            <textarea type={type} name={name} placeholder={placeholder} onChange={onChange} value={value}/>
        </div>
    )
}