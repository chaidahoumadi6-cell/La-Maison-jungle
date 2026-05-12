import { useState } from "react"

import styles from '../styles/Footer.module.css'

const Footer = () => {
    const [inputValue, setInputValue] = useState('')

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleBlur = () => {
        if(!inputValue.includes("@")) {
            alert("votre adresse email est incorrecte.Il manque '@'.")
        }
    }

    return (
        <footer className={styles.lmjFooter}>
            <div className={styles.lmjfooterElem}>
                pour les passionnés de plantes 🍀🌻
            </div>

            <div className="lmj-footer-elem">
                Laissez-nous votre Email : 
                <input placeholder="Entrez votre email" value={inputValue} onChange={handleInput} onBlur={handleBlur}/>
            </div>
           
        </footer>
    )
}

export default Footer