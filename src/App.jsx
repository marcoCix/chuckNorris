import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.css'
import EditorialContent from './components/EditorialContent'
import Button from './components/Button'
import Dropdown from './components/Dropdown'
import Canva from './components/Canva'

function App() {

  const [joke, setJoke] = useState("")
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState("")

  function loadJoke(){
    let url = category !== "" ? `https://api.chucknorris.io/jokes/random?category=${category}` : "https://api.chucknorris.io/jokes/random"
    fetch(url)
      .then((response) => response.json())
      .then((data) => {setJoke(data.value)});
  }

  function copyJoke(){
    if(joke !== ""){
      navigator.clipboard.writeText(joke)
      alert("joke copiato")
    }
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
        clbk={setCategory}
      />

      <Canva 
        joke= {joke}
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