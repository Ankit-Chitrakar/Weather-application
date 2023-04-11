import React from 'react'
import { useWeather } from '../context/Weather';
import { ToastContainer, toast } from "react-toastify";
const TopCities = () => {
    const weather = useWeather();

    const cities = [
        {
            id: 1,
            cityName: 'Tokyo',
        },
        {
            id: 2,
            cityName: 'Berlin',
        },
        {
            id: 3,
            cityName: 'London',
        },
        {
            id: 4,
            cityName: 'Paris',
        },
        {
            id: 5,
            cityName: 'New York',
        },
        {
            id: 6,
            cityName: 'Dubai',
        }

    ];

  return (
    <div className='topcities'>
        {cities.map((city)=> (
            <button onClick={()=> {weather.setSearchCity(city.cityName); toast.info(`Click on the search icon to fetch data in ${city.cityName}`)}} className='cityBtn' key={city.id}>{city.cityName}</button>
        ))}
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
  )
}

export default TopCities