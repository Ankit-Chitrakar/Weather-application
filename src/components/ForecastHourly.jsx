import React from "react";
import dayjs from "dayjs";
import { useWeather } from "../context/Weather";

const ForecastHourly = (props) => {
  const weather = useWeather();
  // weather?.data?.foreacst?.forecastday.map((day)=> console.log(day.date))

  if (weather.unit === 0) {
    return (
      <div className="forecast">
        <h3>{props.value} FORECAST</h3>
        <hr />

        <div className="forecast__preview">
          <div className="second_forecast">
            <span className="time">
              {weather &&
                dayjs(
                  weather?.data?.forecast?.forecastday[0].hour[4].time
                ).format("hh:mm A")}
            </span>
            <img
              src={
                weather &&
                weather?.data?.forecast?.forecastday[0].hour[4].condition.icon
              }
              alt=""
            />
            <span className="temp">
              {weather &&
                weather?.data?.forecast?.forecastday[0]?.hour[4]?.temp_c}
              °
            </span>
          </div>
          <div className="third_forecast">
            <span className="time">
              {weather &&
                dayjs(
                  weather?.data?.forecast?.forecastday[0].hour[9].time
                ).format("hh:mm A")}
            </span>
            <img
              src={
                weather &&
                weather?.data?.forecast?.forecastday[0].hour[9].condition.icon
              }
              alt=""
            />
            <span className="temp">
              {weather &&
                weather?.data?.forecast?.forecastday[0]?.hour[9]?.temp_c}
              °
            </span>
          </div>
          <div className="second_forecast">
            <span className="time">
              {weather &&
                dayjs(
                  weather?.data?.forecast?.forecastday[0].hour[12].time
                ).format("hh:mm A")}
            </span>
            <img
              src={
                weather &&
                weather?.data?.forecast?.forecastday[0].hour[12].condition.icon
              }
              alt=""
            />
            <span className="temp">
              {weather &&
                weather?.data?.forecast?.forecastday[0]?.hour[12]?.temp_c}
              °
            </span>
          </div>
          <div className="third_forecast">
            <span className="time">
              {weather &&
                dayjs(
                  weather?.data?.forecast?.forecastday[0].hour[17].time
                ).format("hh:mm A")}
            </span>
            <img
              src={
                weather &&
                weather?.data?.forecast?.forecastday[0].hour[17].condition.icon
              }
              alt=""
            />
            <span className="temp">
              {weather &&
                weather?.data?.forecast?.forecastday[0]?.hour[17]?.temp_c}
              °
            </span>
          </div>
          <div className="third_forecast">
            <span className="time">
              {weather &&
                dayjs(
                  weather?.data?.forecast?.forecastday[0].hour[21].time
                ).format("hh:mm A")}
            </span>
            <img
              src={
                weather &&
                weather?.data?.forecast?.forecastday[0].hour[21].condition.icon
              }
              alt=""
            />
            <span className="temp">
              {weather &&
                weather?.data?.forecast?.forecastday[0]?.hour[21]?.temp_c}
              °
            </span>
          </div>
        </div>
      </div>
    );
  }
  else{
    return (
        <div className="forecast">
        <h3>{props.value} FORECAST</h3>
        <hr />
    
        <div className="forecast__preview">
            <div className="second_forecast">
            <span className='time'>{weather && dayjs(weather?.data?.forecast?.forecastday[0].hour[4].time).format('hh:mm A')}</span>
                <img src={weather && weather?.data?.forecast?.forecastday[0].hour[4].condition.icon} alt="" />
                <span className="temp">{weather && weather?.data?.forecast?.forecastday[0]?.hour[4]?.temp_f}°</span>
            </div>
            <div className="third_forecast">
            <span className='time'>{weather && dayjs(weather?.data?.forecast?.forecastday[0].hour[9].time).format('hh:mm A')}</span>
                <img src={weather && weather?.data?.forecast?.forecastday[0].hour[9].condition.icon} alt="" />
                <span className="temp">{weather && weather?.data?.forecast?.forecastday[0]?.hour[9]?.temp_f}°</span>
            </div>
            <div className="second_forecast">
            <span className='time'>{weather && dayjs(weather?.data?.forecast?.forecastday[0].hour[12].time).format('hh:mm A')}</span>
                <img src={weather && weather?.data?.forecast?.forecastday[0].hour[12].condition.icon} alt="" />
                <span className="temp">{weather && weather?.data?.forecast?.forecastday[0]?.hour[12]?.temp_f}°</span>
            </div>
            <div className="third_forecast">
            <span className='time'>{weather && dayjs(weather?.data?.forecast?.forecastday[0].hour[17].time).format('hh:mm A')}</span>
                <img src={weather && weather?.data?.forecast?.forecastday[0].hour[17].condition.icon} alt="" />
                <span className="temp">{weather && weather?.data?.forecast?.forecastday[0]?.hour[17]?.temp_f}°</span>
            </div>
            <div className="third_forecast">
            <span className='time'>{weather && dayjs(weather?.data?.forecast?.forecastday[0].hour[21].time).format('hh:mm A')}</span>
                <img src={weather && weather?.data?.forecast?.forecastday[0].hour[21].condition.icon} alt="" />
                <span className="temp">{weather && weather?.data?.forecast?.forecastday[0]?.hour[21]?.temp_f}°</span>
            </div>
          
        </div>
    </div>
      )
  }
};

export default ForecastHourly;
