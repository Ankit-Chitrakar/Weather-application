import React from "react";
import dayjs from "dayjs";
import { useWeather } from "../context/Weather";
// import InvertColorsIcon from '@mui/icons-material/InvertColors';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Forecast = (props) => {
  const weather = useWeather();
  // weather?.data?.foreacst?.forecastday.map((day)=> console.log(day.date))

  if(weather.unit === 0){
    return (
      <div className="forecast">
        <h3>{props.value} FORECAST</h3>
        <hr />
  
        <div className="forecast__preview__day">
          {weather &&
            weather?.data?.forecast?.forecastday.map((day) => (
              <>
                <div className="forecast__day" key={day.date}>
  
  
                  <div className="dayWeather">
                    <span className="time">{dayjs(day.date).format("dddd")}</span>
                    <img src={day.day.condition.icon} alt="" />
                    <span className="temp">{day.day.avgtemp_c}°</span>
                  </div>
                  <hr className="rotate" />
                 <div className="max_min_day">
                  <div className="max_temp_day">
                      {/* <ArrowUpwardIcon style={{ fontSize: "22px", color: "#D3D3D3" }}/> */}
                      <p>High: {  !weather.data ? '35' : day.day.maxtemp_c}°</p>
                  </div>
                  <div className="min_temp_day">
                      {/* <ArrowDownwardIcon style={{ fontSize: "22px", color: "#D3D3D3" }}/> */}
                      <p>Low:  {  !weather.data ? '15' : day.day.mintemp_c}°</p>
                  </div>
                  <div className="humidity_day">
                      {/* <InvertColorsIcon style={{ fontSize: "22px", color: "#D3D3D3" }}/> */}
                      <p>Humi: {  !weather.data ? '40' : day.day.avghumidity}%</p>
                  </div>
                 </div>
  
  
                </div>
              </>
            ))}
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="forecast">
        <h3>{props.value} FORECAST</h3>
        <hr />
  
        <div className="forecast__preview__day">
          {weather &&
            weather?.data?.forecast?.forecastday.map((day) => (
              <>
                <div className="forecast__day" key={day.date}>
  
  
                  <div className="dayWeather">
                    <span className="time">{dayjs(day.date).format("dddd")}</span>
                    <img src={day.day.condition.icon} alt="" />
                    <span className="temp">{day.day.avgtemp_f}°</span>
                  </div>
                  <hr className="rotate" />
                 <div className="max_min_day">
                  <div className="max_temp_day">
                      {/* <ArrowUpwardIcon style={{ fontSize: "22px", color: "#D3D3D3" }}/> */}
                      <p>High: {  !weather.data ? '35' : day.day.maxtemp_f}°</p>
                  </div>
                  <div className="min_temp_day">
                      {/* <ArrowDownwardIcon style={{ fontSize: "22px", color: "#D3D3D3" }}/> */}
                      <p>Low:  {  !weather.data ? '15' : day.day.mintemp_f}°</p>
                  </div>
                  <div className="humidity_day">
                      {/* <InvertColorsIcon style={{ fontSize: "22px", color: "#D3D3D3" }}/> */}
                      <p>Humi: {  !weather.data ? '40' : day.day.avghumidity}%</p>
                  </div>
                 </div>
  
  
                </div>
              </>
            ))}
        </div>
      </div>
    );
  }
  
};

export default Forecast;
