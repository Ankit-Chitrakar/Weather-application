import "./App.css";
import { useWeather } from "./context/Weather";
import TopCities from "./components/TopCities";
import SearchCity from "./components/SearchCity";
import DateTimeLocal from "./components/DateTimeLocal";
import City from "./components/City";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";
import { useEffect } from "react";
import ForecastHourly from "./components/ForecastHourly";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
    weather.fetWeatherDataByLocation();
    toast.success("By default your Current loaction is set..")
  }, []);

      return (
        // style={weather?.data?.current?.temp_c <= 25 ? {background: 'linear-gradient(104deg, rgb(5, 28, 92) 10%,#4482fe 69%'} : {background: 'radial-gradient(circle, rgba(255,100,4,1) 60%, rgba(255,130,11,1) 90%)'}}
        <div className="App">
         {weather.data === null ?  <img className="appimg" src="https://media0.giphy.com/media/fso8urOZ62smoqgT0v/giphy.gif" alt="" />:<>
          <TopCities />
          <SearchCity />
          <DateTimeLocal />
          <City />
          <Weather />
          <ForecastHourly value="HOURLY" />
          <Forecast value="3 DAY" />
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
       /></>}
        </div>
         
      );
    }
  

export default App;
