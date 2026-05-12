
// J'importe useState dequis react
import { useState } from 'react'
import styles from '../styles/QuestionForm.module.css'

// Je créer le components QuestionForm
const QuestionForm = () => {

    // État pour stocker la valeur de la question saisie
    const [inputValue, setInputValue] = useState('Tapez votre Texte')

    const checkValue = (value) => {
        if(!value.includes('p')) {
            setInputValue(value)
        }
    }


    // Fonction appelée lors de la soumission du formulaire
   /* const handleSubmit = (event) => {

        // Empêche le rechargement de la page (comportement par défaut du formulaire)
        event.preventDefault()

        // Affiche une alerte avec la question saisie
        alert(event.target['my_input'].value)

       
    }*/

    return (
       <div>
            {/* Zone de texte multi-lignes contrôlée par le state */}
            {/* ← valeur liée au state inputValue */}
            <textarea value={inputValue} 
            onChange={(e) => checkValue(e.target.value)} />  {/* ← met à jour le state à chaque frappe */}

            <button onClick={() => alert(inputValue)}>Envoyer</button>
       </div>
    )
}

// Export du composant pour pouvoir l’utiliser ailleurs
export default QuestionForm