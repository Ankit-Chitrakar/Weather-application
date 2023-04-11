import React from 'react'
import { useWeather } from '../context/Weather'

const City = () => {

  const weather = useWeather();
  return (
    <div className='place'>
       { weather.data === null ?  '__' :weather.data.location.name}, { weather.data === null ?  '__' :weather.data.location.country}
    </div>
  )
}

export default City