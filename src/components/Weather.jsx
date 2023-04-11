import React from "react";
import AirIcon from "@mui/icons-material/Air";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useWeather } from "../context/Weather";

const Weather = () => {
  const weather = useWeather();

  if (weather.unit === 0) {
    return (
      <div className="weatherContainer">
        <div className="weatherState">
          {!weather.data ? "Cloudy" : weather?.data?.current?.condition?.text}
        </div>
        <div className="weatherPreview">
          <img
            src={
              !weather.data
                ? "https://cdn.weatherapi.com/weather/64x64/day/113.png"
                : weather?.data?.current?.condition?.icon
            }
            alt=""
          />
          <div className="tempareture">
            {!weather.data ? "18" : weather?.data?.current?.temp_c}°C
          </div>
          <div className="airquality">
            <div className="real_felt">
              <ThermostatIcon
                style={{
                  fontSize: "22px",
                  marginRight: "10px",
                  color: "white",
                }}
              />
              <p>
                Real felt:{" "}
                {!weather.data ? "17" : weather?.data?.current?.feelslike_c}°
              </p>
            </div>
            <div className="humidity">
              <InvertColorsIcon style={{ fontSize: "22px", color: "white" }} />
              <p>
                Humidity:{" "}
                {!weather.data ? "45" : weather?.data?.current?.humidity}%
              </p>
            </div>
            <div className="wind">
              <AirIcon style={{ fontSize: "22px", color: "white" }} />
              <p>
                Wind: {!weather.data ? "45" : weather?.data?.current?.wind_kph}{" "}
                km/h
              </p>
            </div>
          </div>
        </div>
        <div className="weatherExtraPreview">
          <div className="sun_rise">
            <WbSunnyIcon style={{ fontSize: "22px", color: "white" }} />
            <span>
              Rise:{" "}
              {!weather.data
                ? "04:50 AM"
                : weather.data.forecast.forecastday[0].astro.sunrise}
            </span>
          </div>
          <p className="unit__bridge">|</p>
          <div className="sun_set">
            <WbTwilightIcon style={{ fontSize: "22px", color: "white" }} />
            <span>
              Set:{" "}
              {!weather.data
                ? "04:50 AM"
                : weather.data.forecast.forecastday[0].astro.sunset}
            </span>
          </div>
          <p className="unit__bridge">|</p>
          <div className="high_temp">
            <ArrowUpwardIcon style={{ fontSize: "22px", color: "white" }} />
            <span>
              High:{" "}
              {!weather.data
                ? "32"
                : weather.data.forecast.forecastday[0].day.maxtemp_c}
              °
            </span>
          </div>
          <p className="unit__bridge">|</p>
          <div className="low_temp">
            <ArrowDownwardIcon style={{ fontSize: "22px", color: "white" }} />
            <span>
              Low:{" "}
              {!weather.data
                ? "32"
                : weather.data.forecast.forecastday[0].day.mintemp_c}
              °
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="weatherContainer">
        <div className="weatherState">
          {!weather.data ? "Cloudy" : weather?.data?.current?.condition?.text}
        </div>
        <div className="weatherPreview">
          <img
            src={
              !weather.data
                ? "https://cdn.weatherapi.com/weather/64x64/day/113.png"
                : weather?.data?.current?.condition?.icon
            }
            alt=""
          />
          <div className="tempareture">
            {!weather.data ? "18" : weather?.data?.current?.temp_f}°F
          </div>
          <div className="airquality">
            <div className="real_felt">
              <ThermostatIcon
                style={{
                  fontSize: "22px",
                  marginRight: "10px",
                  color: "white",
                }}
              />
              <p>
                Real felt:{" "}
                {!weather.data ? "17" : weather?.data?.current?.feelslike_f}°
              </p>
            </div>
            <div className="humidity">
              <InvertColorsIcon style={{ fontSize: "22px", color: "white" }} />
              <p>
                Humidity:{" "}
                {!weather.data ? "45" : weather?.data?.current?.humidity}%
              </p>
            </div>
            <div className="wind">
              <AirIcon style={{ fontSize: "22px", color: "white" }} />
              <p>
                Wind: {!weather.data ? "45" : weather?.data?.current?.wind_kph}{" "}
                km/h
              </p>
            </div>
          </div>
        </div>
        <div className="weatherExtraPreview">
          <div className="sun_rise">
            <WbSunnyIcon style={{ fontSize: "22px", color: "white" }} />
            <span>
              Rise:{" "}
              {!weather.data
                ? "04:50 AM"
                : weather.data.forecast.forecastday[0].astro.sunrise}
            </span>
          </div>
          <p className="unit__bridge">|</p>
          <div className="sun_set">
            <WbTwilightIcon style={{ fontSize: "22px", color: "white" }} />
            <span>
              Set:{" "}
              {!weather.data
                ? "04:50 AM"
                : weather.data.forecast.forecastday[0].astro.sunset}
            </span>
          </div>
          <p className="unit__bridge">|</p>
          <div className="high_temp">
            <ArrowUpwardIcon style={{ fontSize: "22px", color: "white" }} />
            <span>
              High:{" "}
              {!weather.data
                ? "32"
                : weather.data.forecast.forecastday[0].day.maxtemp_f}
              °
            </span>
          </div>
          <p className="unit__bridge">|</p>
          <div className="low_temp">
            <ArrowDownwardIcon style={{ fontSize: "22px", color: "white" }} />
            <span>
              Low:{" "}
              {!weather.data
                ? "32"
                : weather.data.forecast.forecastday[0].day.mintemp_f}
              °
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default Weather;
