/**
 *  ShoppingList est un composant qui contient la liste des courses
 */

/*const plantList = ['monstera', 'ficus lyrata', 'pothos argenté','yucca', 'palmier', 'mawa fulera', 'mubwasera', 'langi langi'];*/

// Import du fichier CSS module pour styliser la liste des plantes
import styles from '../styles/Shopping.module.css'

// Import du composant PlantItem
import PlantItem from './PlantItem'

// Tableau contenant les données des plantes
const plantList =[
    {
        name: 'monstera', // Nom de la plante
        category: 'classique', // Catégorie
        id: '1', // Identifiant unique
        isBestSale: true, // Indique si c’est une meilleure vente
        isSpecialOffer: false, // Indique une offre spéciale
        water: 3, // Niveau d’arrosage
        light: 5, // Niveau de lumière
        cover: null
    },
    {
        name: 'ficus lyrata',
        category: 'classique',
        id: '2',
        isBestSale: false,
        isSpecialOffer: true,
        water: 4,
        light: 6,
        cover: null
    },
    {
        name: 'pothos argenté',
        category: 'classique',
        id: '3',
        isBestSale: false,
        isSpecialOffer: true,
        water: 6,
        light: 9,
        cover: null
    },
    {
        name: 'yucca',
        category: 'classique',
        id: '4',
        isBestSale: true,
        isSpecialOffer: false,
        water: 9,
        light: 2,
        cover: null
    },
    {
        name: 'palmier',
        category: 'classique',
        id: '5',
        isBestSale: false,
        isSpecialOffer: true,
        water: 5,
        light: 7,
        cover: null
    },
    {
        name: 'mawa fulera',
        category: 'classique',
        id: '6',
        isBestSale: true,
        isSpecialOffer: false,
        water: 8,
        light: 2,
        cover: null
    },
    {
        name: 'mubwasera',
        category: 'classique',
        id: '7',
        isBestSale: true,
        isSpecialOffer: false,
        water: 3,
        light: 9,
        cover: null
    },
    {
        name: 'langi langi',
        category: 'classique',
        id: '8',
        isBestSale: false,
        isSpecialOffer: true,
        water: 4,
        light: 2,
        cover: null
    },
]

// Déclaration du composant ShoppingList
const ShoppingList = () => {

    // Retour du composant JSX
    return (

        // Conteneur principal de la liste des plantes
        <div className={styles.plantList}>

            {/* Liste des plantes */}
            <ul className={styles.lmjPlantList}>

                {/* Parcours du tableau plantList avec map() */}
                {plantList.map((plant) => (

                    // Affichage d’un composant PlantItem pour chaque plante
                    <PlantItem
                        key={plant.id} // Clé unique React
                        id={plant.id}
                        name={plant.name}
                        cover={plant.cover}
                        water={plant.water}
                        light={plant.light}
                    />
                ))}
            </ul>
        </div>
    )
}

// Export du composant pour utilisation ailleurs
export default ShoppingList