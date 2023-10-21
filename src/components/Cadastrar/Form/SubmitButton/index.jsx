import styles from './submitbutton.module.css'

export default function SubmitButton({ text }) {
    return (
        <div>
            <button type="submit" className={styles.btn}>{text}</button>
        </div>
    )
}