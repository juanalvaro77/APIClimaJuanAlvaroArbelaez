import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import Weather from './components/Weather'
import Simbolos from "./components/Simbolos"
import LoaderPage from './components/LoaderPage;'
function App() {
  const [weatherData, setWeatherData] = useState({})
  const [tempUnit, setTempUnit] = useState("metric");
  const [cityName, setCityName] = useState('');


  useEffect ( () => {
    let posLat = 0;
    let posLon = 0;
    navigator.geolocation.getCurrentPosition((position) => {
      posLat= position.coords.latitude.toFixed(5)
      posLon = position.coords.longitude.toFixed(5)
    
      if (cityName=="") {
        axios
        .get("https://api.openweathermap.org/data/2.5/weather?lat="+posLat+"&lon="+posLon+"&appid=1a743da39695a2398c1aeac225abfaa9&units=metric")
        .then(resp=>setWeatherData(resp.data))
        .catch(error=>console.error(error))
      } else {
        axios
        .get("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=1a743da39695a2398c1aeac225abfaa9&units="+tempUnit)
        .then(resp=>setWeatherData(resp.data))
        .catch(error=>console.error(error))
      }
  
      })
    
    
    },[tempUnit, cityName])

  const changeTempUnit = () => {
    if(tempUnit=="metric"){
      setTempUnit("imperial")
    } else{
      setTempUnit("metric")
    }
  }

  const [name, setName] = useState("");

  const captureCity = (event) => {
    setName(event.target.value );
  }

  const searchCity = () => {
   setCityName(name);
  }
  
  return (
    <div className="App" >
      {/*<div className="progress-bar"></div>*/}
      <Simbolos data = {weatherData}/>
      <div className='Header'>
        <div className="Title">
          <p>Weather App</p>
        </div>
        <div className="search">
            <input  value={name} placeholder="Search City" onChange={captureCity}/>
            <input type="button" value="Search" onClick={searchCity}/>
        </div>
        {/*<div className="switch-button">
          <input type="checkbox" name="switch-button" id="switch-label" className="switch-button__checkbox"></input>
          <label for="switch-label" className="switch-button__label"></label>
        </div>*/}
      </div>
      <Weather
      data = {weatherData}
      unity = {tempUnit}/>
      <button className="btn-far" onClick={changeTempUnit}>Cels / Fahr</button>
    </div>
  )
}

export default App
