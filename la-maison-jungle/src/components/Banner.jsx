/**
 *  Banner est le composant pour présenter la banniére ( la barre de navigation)
 */

// J'importe le fichier Banner.css appliqué le composant Banner.jsx
import styles from "../styles/Banner.module.css"

// J' importe le logo
import logo  from '../assets/fleurs-logo.jpg';


/**
 * 
 * @param {*} param0 
 * @returns 
 *  Le composant Banner.jsx prend commen propos ses enfants déclarés dans le components App.jsx
 *  J'utilise {Children} pour faire apple aux propos venant du composant 
*/


const Banner = ({children}) => {
    const title = "Bienvenu à la Maison Jungle"
    // Le composant Banner retourne un message code en HTML 
    //utilise un CSS Module objet styles importé depuis un fichier module.css
    //image importée en haut du fichier avec 
    return (
        <div className={styles.banner}>
            {children}
            
        </div>
    )
}

// J' exporte le composant Banner utilisant les mots-clés export default suivi du nom du composant
export default Banner 