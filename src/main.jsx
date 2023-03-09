import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

if (!navigator.geolocation) {
  alert("Tu navegador no tiene opcion de geolocalizacion activada");
  throw new Error("Tu navegador no tiene opcion de geolocalizacion activada");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
