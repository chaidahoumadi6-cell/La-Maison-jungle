/**
 *  Le composant PlantItem gère chaque plante vendue sur le site
 *  Exemple : la plante a une image, un nom, type d'arrosage, type d'éclairage
 */

import CareScale from "./CareScale"
import styles from "../styles/PlantItem.module.css"
import defaultImage from "../assets/fleurs-logo.jpg"



// Déclaration du composant PlantItem.
// Il reçoit des propriétés (props) : id, cover, name, water, light
const PlantItem = ({ id, cover, name, water, light }) => {
    const handleClick = (event) => {
        console.log(" Je clique sur mon evenement :", event)
    }

    // Le composant retourne un élément <li>
    return (
        // Élément de liste avec une classe CSS
        <li key={id} className={styles.lmjplantItem} onClick={() => handleClick(name)}>

            {/* Affichage de l'image de la plante */}
            <img
                className={styles.lmjplantItemCover} // Classe CSS pour le style
                src={cover || defaultImage} // Utilise cover si disponible, sinon image par défaut
                alt={`${name} cover`} // Texte alternatif
            />
            {/* Affiche le nom de la plante */}
            {name}

            {/* Bloc contenant les indicateurs d’entretien */}
            <div>

                {/* Composant affichant le niveau d’arrosage */}
                <CareScale careType="water" scaleValue={water} />

                {/* Composant affichant le niveau de lumière */}
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    )
}

// Export du composant pour pouvoir l’utiliser ailleurs
export default PlantItem