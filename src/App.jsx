import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.css'
import EditorialContent from './components/EditorialContent'
import Button from './components/Button'
import Dropdown from './components/Dropdown'

function App() {

  const [joke, setJoke] = useState("")
  const [categories, setCategories] = useState([])

  function loadJoke(){
    console.log("fetch del gioco")
  }

  function copyJoke(){
    console.log("joke copiato")
  }

  function loadCategories(){
    fetch("https://api.chucknorris.io/jokes/categories")
    .then((response) => response.json())
    .then((data) => {setCategories(data)});
  }

  useEffect(
    () => loadCategories(),[]
  )

  return (
    <div className="App">
      
      <EditorialContent
        title = "WebApp API Chuck Norris"
        content = "Design di una pagina che utilizza la API di chucknorris.io per generare alla pressione di un pulsante una battuta del tipo che selezioni nel menu a tendina qui sotto."
      />

      <img src='../public/img/logo.png' className='logo'/>

      <Dropdown
        list={categories}
        clbk={setCategories}
      />


      <Button 
        content = "Carica il joke"
        variant = "enabled"
        clbk={loadJoke}
      />

      <Button 
        content = "Copia il testo"
        variant = {joke == "" ? "disabled":"enabled"}
        clbk={copyJoke}
      />


    </div>
  )
}

export default App