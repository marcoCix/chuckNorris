import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.css'
import EditorialContent from './components/EditorialContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <EditorialContent
        title = "WebApp API Chuck Norris"
        content = "Design di una pagina che utilizza la API di chucknorris.io per generare alla pressione di un pulsante una battuta del tipo che selezioni nel menu a tendina qui sotto."
      />

      {
        joke != "" &&
        <div id="joke">{joke}</div>
      }

      <Button 
        content="Carica ili joke"
        variant="dark"
        clbk="{loadJoke}"
      />

      <Button 
        content="Copia il testo"
        variant="dark"
        clbk="{loadJoke}"
      />



    </div>
  )
}

export default App
