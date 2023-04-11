import { createContext, useContext, useState } from "react";
import { getWeatherbyCityName, getWeatherByCityName_openWeather, getWeatherbyLocation } from "../api/WeatherApi";

const WeatherContext = createContext(null);

export const useWeather = ()=>{
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) =>{
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);
    const [unit, setUnit] = useState(0); // 0 for celcius 1 fro farenhite

    const fetchWeatherData = async()=>{
        const weatherData = await getWeatherbyCityName(searchCity);
        setData(weatherData);  
    }

    const fetchWeatherData_Open = async()=>{  // off
        const weatherData = await getWeatherByCityName_openWeather(searchCity);
        setData(weatherData);
    }

    const fetWeatherDataByLocation = async()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            getWeatherbyLocation(position.coords.latitude, position.coords.longitude).then((data)=> setData(data));
        })
    }
    
    return(
        <WeatherContext.Provider value={{data, searchCity, setSearchCity, fetchWeatherData, fetchWeatherData_Open, fetWeatherDataByLocation, unit, setUnit}}>
            {props.children}
        </WeatherContext.Provider>
    )
}