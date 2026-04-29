/**
 *  Banner est le composant pour présenter la banniére ( la barre de navigation)
 */

// J'importe le fichier Banner.css appliqué au composant Banner.jsx
import styles from "../styles/Banner.module.css"

// J' importe le logo
import logo  from '../assets/fleurs-logo.jpg';


const Banner = () => {
    const title = "Bienvenu à la Maison Jungle"
    // Le composant Banner retourne un message code en HTML 
    //utilise un CSS Module objet styles importé depuis un fichier module.css
    //image importée en haut du fichier avec 
    return (
        <div className={styles.banner}>
            <img src={logo} alt="Logo La maison jungle" className={styles.logo}/>
            <h1 className={styles.titles}> {title} </h1>
        </div>
    )
}

// J' exporte le composant Banner utilisant les mots-clés export default suivi du nom du composant
export default Banner 