import * as Display from './display';
import listener from './listeners';
import getWeather from './api';

// Aux function
function parser(data, unitsCharacter){
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

(function setup() {
  Display.searchSuggestions();

  let printer = (data) => { console.log(data) };
  listener(printer);

 // getWeather({city: 'Medellin', units: 'metric'})
 //   .then(data => Display.weather(parser(data,'c')));
})();
