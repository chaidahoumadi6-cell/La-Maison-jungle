/**
 *  Le components plantItme gére chaque plante vendu sur le site 
 *  Exemple la plante a une imahe un nom type d'arrosage le type d'éclairage
 */

import CareScale from "./CareScale"
import styles from "../styles/PlantItem.module.css"

// Reçoit les props plantItem
const PlantItem = ({ id, cover, name, water, light, isBestSale }) => {
    return (
        <li key={id} className={styles.lmjplantItem}>
            {cover && (
                <img
                    className={styles.lmjplantItemCover}
                    src={cover}
                    alt={`${name} cover`}
                />
            )}
            {name}

            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem