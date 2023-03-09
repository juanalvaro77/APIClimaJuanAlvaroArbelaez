import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios"
import Weather from '../components/Weather'

function App() {
  const [count, setCount] = useState(10)

  return (
    <div className="App" >
      <div className='Header'>
        <div className="Title">
          <p>Weather App</p>
        </div>
        <div className="search">
          <form action="#">
            <input type="text" placeholder="Select City" name="search"></input>
            <button>SEARCH</button>
          </form>
        </div>
        <div className="switch-button">
          <input type="checkbox" name="switch-button" id="switch-label" className="switch-button__checkbox"></input>
          <label for="switch-label" className="switch-button__label"></label>
        </div>
      </div>
      <Weather/>
      <button className="btn-far" >Pasar a Far</button>
    </div>
  )
}

export default App
