import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// J'importe le composant Banner.jsx  On récupère le composant Banner qui se trouve dans le dossier Components
import Banner from './components/Banner'

import Cart from'./components/Cart'

//App est le composant principal de l'application
function App() {
  //const [count, setCount] = useState(0)

  //  Retourne le composant Banner 
  // on affiche le composant Banner importé plus haut
  return (
    <>
      <Banner /> 
      <Cart />
    </>
  )
}

// Ce fichier met à disposition le composant App pour que d'autres fichiers puissent l'utiliser
export default App
