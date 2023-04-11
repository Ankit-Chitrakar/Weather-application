import React from 'react'
import dayjs from 'dayjs';
import { useWeather } from '../context/Weather';

const DateTimeLocal = () => {
  const weather = useWeather();
  const localDate = dayjs( weather && weather?.data?.location?.localtime).format("dddd, DD MMM YYYY");
  const localTime =  dayjs( weather && weather?.data?.location?.localtime).format("hh:mm A");
  return (
    <div className='localTime'>
        {/* Friday, 26 Feb 2023 | Local time: 12:35 PM */}
        {localDate} | Local time: {localTime}
    </div>
  )
}

export default DateTimeLocal