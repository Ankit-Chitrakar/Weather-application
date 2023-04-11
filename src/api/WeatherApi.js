const baseUrl = 'https://api.weatherapi.com/v1/forecast.json?key=791a69014e524ffbaef163418232003';

export const getWeatherbyCityName = async(city)=>{
    const response = await fetch(`${baseUrl}&q=${city}&days=7&aqi=no&alerts=yes`);
    return response.json();
}

// https://api.openweathermap.org/data/2.5/forecast?q=kolkata&appid=5d6506a5f7799c4104865e11741d1113&units=metric

const baseUrl_open = 'https://api.openweathermap.org/data/2.5/forecast?';
const apiKey = '5d6506a5f7799c4104865e11741d1113';

export const getWeatherByCityName_openWeather = async(city)=>{
    const response1 = await fetch(`${baseUrl_open}&q=${city}&appid=${apiKey}&units=metric`);
    return response1.json();
}

export const getWeatherbyLocation = async(lat, lon)=>{
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&days=5&aqi=no&alerts=yes`);
    // const response = await fetch(`${baseUrl}&q=27.2046,77.4977&days=5&aqi=no&alerts=yes`);
    return response.json();
}