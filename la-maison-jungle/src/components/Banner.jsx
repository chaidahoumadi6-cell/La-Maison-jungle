/**
 *  Banner est le composant pour présenter la banniére ( la barre de navigation)
 */

// J'importe le fichier Banner.css appliqué au composant Banner.jsx
import "../styles/Banner.css"

import logo  from '../assets/fleurs-logo.jpg';


const Banner = () => {
    const title = "Bienvenu à la Maison Jungle"
    // Le composant Banner retourne un message code en HTML 
    return (
        <div className="banner">
            <img src={logo} alt="Logo La maison jungle" className="banner-logo" />
            
            <h1 className="banner-title"> {title} </h1>
        </div>
    )
}

// J' exporte le composant Banner utilisant les mots-clés export default suivi du nom du composant
export default Banner 