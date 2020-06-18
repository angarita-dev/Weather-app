function searchSuggestions() {
  const input = document.getElementById('location-input');
  const options = ["New York", "Paris", "Berlin", "Buenos Aires", "London"];
  input.setAttribute('placeholder', options[options.length-1]);

  let counter = 0;
  let interval = setInterval(() => {
    input.setAttribute('placeholder', options[counter]);
    counter = counter == options.length-1 ? 0 : counter+1;
  },1500);
}

function clear(){
  const cityPlaceholder = document.getElementById('location');
  const temperaturePlaceholder = document.getElementById('temp');
  const descriptionPlaceholder = document.getElementById('description');
  const feelsPlaceholder = document.getElementById('feels');
  const cloudsPlaceholder = document.getElementById('clouds');
  const humidityPlaceholder = document.getElementById('humidity');
  const pressurePlaceholder = document.getElementById('pressure');

  cityPlaceholder.innerHTML = '';
  temperaturePlaceholder.innerHTML = '';
  descriptionPlaceholder.innerHTML = '';
  feelsPlaceholder.innerHTML = '';
  cloudsPlaceholder.innerHTML = '';
  humidityPlaceholder.innerHTML = '';
  pressurePlaceholder.innerHTML = '';
}

function weather({locationName, temperature, description, feels, clouds, humidity, pressure}){
  const cityPlaceholder = document.getElementById('location');
  const temperaturePlaceholder = document.getElementById('temp');
  const descriptionPlaceholder = document.getElementById('description');
  const feelsPlaceholder = document.getElementById('feels');
  const cloudsPlaceholder = document.getElementById('clouds');
  const humidityPlaceholder = document.getElementById('humidity');
  const pressurePlaceholder = document.getElementById('pressure');

  cityPlaceholder.innerHTML = locationName;
  temperaturePlaceholder.innerHTML = temperature;
  descriptionPlaceholder.innerHTML = description;
  feelsPlaceholder.innerHTML = feels;
  cloudsPlaceholder.innerHTML = clouds;
  humidityPlaceholder.innerHTML = humidity;
  pressurePlaceholder.innerHTML = pressure;
}


export { 
  searchSuggestions,
  clear,
  weather
}
