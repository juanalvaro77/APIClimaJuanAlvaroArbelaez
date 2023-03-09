import React from 'react';
import axios from 'axios';
const GetUserLocation = () => {

    useEffect ( () => {
    
        axios
          navigator.geolocation.getCurrentPosition({coords})
          .then([coords.longitude, coords.latitude])
          .catch("No se pudo obtener la geolocalizacion")
    
        },[])
    return (
        <div>
            
        </div>
    );
};

export default GetUserLocation;