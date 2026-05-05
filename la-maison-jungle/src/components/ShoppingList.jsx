/**
 *  ShoppingList est un composant qui contient la liste des courses
 */

/*const plantList = ['monstera', 'ficus lyrata', 'pothos argenté','yucca', 'palmier', 'mawa fulera', 'mubwasera', 'langi langi'];*/

import styles from '../styles/Shopping.module.css'

import PlantItem from './PlantItem'

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
        <div className={styles.plantList}>
            <ul className={styles.lmjPlantList}>
                {plantList.map((plant) => (
                    <PlantItem
                        key={plant.id}
                        id={plant.id}
                        name={plant.name}
                        cover={plant.cover}
                        water={plant.water}
                        light={plant.light}
                        isBestSale={plant.isBestSale}
                        isSpecialOffer={plant.isSpecialOffer}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList
 