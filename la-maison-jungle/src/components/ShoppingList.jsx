/**
 *  ShoppingList est un composant qui contient la liste des courses
 */

/*const plantList = ['monstera', 'ficus lyrata', 'pothos argenté','yucca', 'palmier', 'mawa fulera', 'mubwasera', 'langi langi'];*/

import styles from '../styles/Shopping.module.css'

const plantList =[
    {
        name: 'monstera',
        category: 'classique',
        id: '1',
        isBestSale: true
    },
    {
        name: 'ficus lyrata',
        category: 'classique',
        id: '2',
        isBestSale: false
    },
    {
        name: 'pothos argenté',
        category: 'classique',
        id: '3',
        isBestSale: false
    },
    {
        name: 'yucca',
        category: 'classique',
        id: '4',
        isBestSale: true
    },
    {
        name: 'palmier',
        category: 'classique',
        id: '5',
        isBestSale: false
    },
    {
        name: 'mawa fulera',
        category: 'classique',
        id: '6',
        isBestSale: true
    },
    {
        name: 'mubwasera',
        category: 'classique',
        id: '7',
        isBestSale: true
    },
    {
        name: 'langi langi',
        category: 'classique',
        id: '8',
        isBestSale: false
    },
]

const ShoppingList = () => {
    return (
        <div className={styles.plantList}>
        <ul className={styles.lmjPlantList}>
        {plantList.map((plant) => (
        <li key={plant.id} className={styles.lmjPlantItem}>
        {plant.isBestSale ? <span>💍</span>: <span >👙</span>
      }
      {plant.name}
    </li>
  ))}
</ul>
</div>

    )
}

export default ShoppingList
