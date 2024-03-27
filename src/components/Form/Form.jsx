import React, { useState } from "react";

import styles from './form.module.scss';


export default function Form() {

    const [value, setValue] = useState('')

    const [shownText, setShownText] = useState('')

    const handleCheck = (e) => {
        e.preventDefault()
        setShownText(value.toUpperCase())
        setValue('')
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="text" className={styles.input} value={value} onChange={(e) => setValue(e.target.value)} placeholder='Введите текст' />
                <button className={styles.button} type='submit' onClick={(e) => handleCheck(e)}>Проверить</button>
            </form>
            <div className={styles.final_text}>{shownText}</div>
        </div >

    )
}
