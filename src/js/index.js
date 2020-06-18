import * as Display from './display';
import listener from './listeners';
import getWeather from './api';

// Aux function
function parse(data, unitsCharacter){
  console.log(data);
  let degreeCharacter = String.fromCharCode(176);
  return {
    locationName: `${data.name}, ${data.sys.country}`,
    temperature: `${parseInt(data.main.temp)}${degreeCharacter} ${unitsCharacter}`,
    description: `${data.weather[0].main}`,
    feels: `Feels like: ${parseInt(data.main.feels_like)}${degreeCharacter} ${unitsCharacter}`,
    clouds: `Clouds: ${data.clouds.all}%`,
    humidity: `Humidity: ${data.main.humidity}%`,
    pressure: `Pressure: ${data.main.pressure} hPa`, 
  }
}

function searchLocation(locationName){
  const unitsCharacter = 'c';
  const units = 'metric';
  let displayWeatherOnTimeout = (weatherInfo) => { setTimeout(() => { Display.weather(weatherInfo) }, 500 ) }

  Display.weatherContainer();
  Display.clear();
  getWeather({locationName, units}).then(data => { displayWeatherOnTimeout(parse(data, unitsCharacter)) });

}

(function setup() {
  Display.searchSuggestions();

  listener(searchLocation);
})();
