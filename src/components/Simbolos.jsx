import React from 'react';

const Simbolos = ({data}) => {
    const imgs = [ "drizzle", "drizzlePercent", "snowy", "cloudy", "partlyCloudy", "sunny", "thunderstorms", "windy"]
    let temp = Math.floor(data.main?.temp)
    let weat = data.weather?.[0].main
    let j=200;
    let i="";
    console.log(weat)
    if (data.weather?.[0].main=="Drizzle"){
        i="/"+imgs[0]+".svg";
        } else if (data.weather?.[0].main=="Rain") {
        i="/"+imgs[1]+".svg";
        } else if (data.weather?.[0].main=="Snow"){
        i="/"+imgs[2]+".svg";
        } else if (data.weather?.[0].main=="Clouds") {
        i="/"+imgs[3]+".svg";
        }else if (data.weather?.[0].main=="Clear"){
        i="/"+imgs[5]+".svg";
        } else if (data.weather?.[0].main=="kkkkkkk") {
        i="/"+imgs[4]+".svg";
        }else if (data.weather?.[0].main=="Thunderstorm"){
        i="/"+imgs[6]+".svg";
        } else if (data.weather?.[0].main=="mmmmmm") {
        i="/"+imgs[7]+".svg";
        }
     
 
    return (
        <div>
            <img className="sign" src={i} alt="" />
        </div>
    )
};

export default Simbolos;