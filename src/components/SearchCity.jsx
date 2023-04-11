import React from 'react'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import SearchIcon from '@mui/icons-material/Search';

import { useWeather } from '../context/Weather';
import { ToastContainer, toast } from "react-toastify";

const SearchCity = () => {
  const weather = useWeather();
  // console.log(weather);

  const success = async(position)=>{
    // console.log(position.coords.latitude)
    // console.log(position.coords.longitude)
    await weather.fetWeatherDataByLocation(position.coords.latitude, position.coords.longitude);
    toast.success(`Successfully Fetched weather at your current location!!`)
    weather.setSearchCity('');
  }
  const error = ()=>{
    toast.error(`Oops!! not Retrieve your cureent location :)`)
  }

  const handleUserCurrLocation = async()=>{
    toast.info(`Fetching weather of your current location...`);
    // await weather.fetWeatherDataByLocation();

    navigator.geolocation.getCurrentPosition(success, error);
  }

  const handleFetchData = async()=>{
    toast.info(`Fetching weather at ${weather.searchCity}...`);
    await weather.fetchWeatherData();
    toast.success(`Successfully Fetched weather data in ${weather.searchCity}!!`);
  }

  return (
    <div className="search__location__unit">
      <div className="search">
        <input type="text" placeholder="Search city here..." value={weather?.searchCity} onChange={(e)=> weather.setSearchCity(e.target.value)} />
        <button className="search_btn" onClick={ handleFetchData}>
        <SearchIcon  className="search__icon"  style={{fontSize: '26px', marginRight: '14px'}}/></button>
        <button className="location_btn" onClick={handleUserCurrLocation}>
        <PlaceOutlinedIcon className="location__icon" style={{fontSize: '24px'}}/></button>
      </div>
      <div className="units">
        <button className="celcius" onClick={()=> {weather.setUnit(0); toast.success(`Successfully, changed unit to Celsius (°C)`)}}>°C</button>
        <p className="unit__bridge">|</p>
        <button className="farenhite" onClick={()=> {weather.setUnit(1); toast.success(`Successfully, changed unit to Fahrenheit (°F)`)}}>°F</button>

        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      </div>
    </div>
  )
}

export default SearchCity