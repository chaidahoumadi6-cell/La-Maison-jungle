/**
 *  ShoppingList est un composant qui contient la liste des courses
 */

/*const plantList = ['monstera', 'ficus lyrata', 'pothos argenté','yucca', 'palmier', 'mawa fulera', 'mubwasera', 'langi langi'];*/

import styles from '../styles/Shopping.module.css'

// J'importe le fichier CareScale appliqué le composant
import CareScale from './CareScale'

const plantList =[
    {
        name: 'monstera',
        category: 'classique',
        id: '1',
        isBestSale: true,
        isSpecialOffer: false,
        water: 3,
        light: 5
    },
    {
        name: 'ficus lyrata',
        category: 'classique',
        id: '2',
        isBestSale: false,
        isSpecialOffer: true,
        water: 4,
        light: 6
    },
    {
        name: 'pothos argenté',
        category: 'classique',
        id: '3',
        isBestSale: false,
        isSpecialOffer: true,
        water: 6,
        light: 9
    },
    {
        name: 'yucca',
        category: 'classique',
        id: '4',
        isBestSale: true,
        isSpecialOffer: false,
        water: 9,
        light: 2
    },
    {
        name: 'palmier',
        category: 'classique',
        id: '5',
        isBestSale: false,
        isSpecialOffer: true,
        water: 5,
        light: 7
    },
    {
        name: 'mawa fulera',
        category: 'classique',
        id: '6',
        isBestSale: true,
        isSpecialOffer: false,
        water: 8,
        light: 2
    },
    {
        name: 'mubwasera',
        category: 'classique',
        id: '7',
        isBestSale: true,
        isSpecialOffer: false,
        water: 3,
        light: 9
    },
    {
        name: 'langi langi',
        category: 'classique',
        id: '8',
        isBestSale: false,
        isSpecialOffer: true,
        water: 4,
        light: 2
    },
]

const ShoppingList = () => {
    return (
        // Conteneur principal de la liste
        // (ul) Liste non ordonnée avec le style CSS 
        // On parcourt chaque plante du tableau plantList 
        // Si la plante est en best-seller → 💍, sinon → 👙
        // Affiche le nom de la plante 
        <div className={styles.plantList}>
        <ul className={styles.lmjPlantList}> 
        {plantList.map((plant) => (
        //Chaque plante devient un élément de liste, key est obligatoire en React 
        <li key={plant.id} className={styles.lmjPlantItem}>
        {plant.isBestSale ? <span>💍</span>: <span >👙</span>}
      {plant.name}
      {plant.isSpecialOffer ? <span className={ styles.lmjSales}>Solde</span> : <span></span>}

      <CareScale careType="light" scaleValue={plant.light}></CareScale>
      <CareScale careType="water" scaleValue={plant.water}></CareScale>
    </li>
  ))}
</ul>
</div>

    )
}

export default ShoppingList
 