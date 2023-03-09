import React from 'react';

const Weather = ({data, unity}) => {
    let temp = Math.floor(data.main?.temp)
    let velWind = data.wind?.speed
    let unityVal, velVal = ""
    let velWind2 

    
    if(unity=="metric") {
        unityVal = "Celsius"
        velVal = "m/s"
        velWind2 = velWind
        } else {
        unityVal = "Fahrenheit"
        velVal = "miles/hour"
        temp=(temp * 1.8) + 32
        velWind = velWind*2.24
        velWind2 = velWind.toFixed(2)
    }
    return (
        <div className="CardWeather">
            <h2>{temp} {unityVal} </h2>
            <h3><span>Viento: </span>{velWind2} {velVal}</h3>
            <h3><span>Nubes: </span>{data.clouds?.all} %</h3>
            <h3><span>Presion: </span>{data.main?.pressure} hPa</h3>
            <h1>{data.name}, {data.sys?.country}</h1>
            <h3>{data.weather?.[1]?.description}</h3>
        </div>
    );
}

export default Weather;