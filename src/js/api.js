async function getWeather({locationName, units}){
  console.log(locationName);
  console.log(units);
  const API_KEY = '2f0babefc06cd96c45df8d19d2f9a2e4';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}&units=${units}`;
   
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

export default getWeather;
