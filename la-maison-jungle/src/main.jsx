import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// App et le composant principal le cœur de ton application
import App from './App.jsx'

//affiche ton application dans le navigateur.
createRoot(document.getElementById('root')).render(

   // StrictMode enveloppe l'app pour détecter les problèmes potentiels "effets exécutés deux fois en dev
   //entoure ton app pour activer des vérifications (ça n’affiche rien visuellement).
   // cest ton composant principal
  <StrictMode>
    
    <App /> 
  </StrictMode>,
)
