function searchSuggestions() {
  const input = document.getElementById('location-input');
  const options = ['New York', 'Paris', 'Berlin', 'Buenos Aires', 'London'];
  input.setAttribute('placeholder', options[options.length - 1]);

  let counter = 0;
  setInterval(() => {
    input.setAttribute('placeholder', options[counter]);
    counter = (counter === options.length - 1) ? 0 : counter + 1;
  }, 1500);
}

function clear() {
  const cityPlaceholder = document.getElementById('location');
  const temperaturePlaceholder = document.getElementById('temp');
  const descriptionPlaceholder = document.getElementById('description');
  const feelsPlaceholder = document.getElementById('feels');
  const cloudsPlaceholder = document.getElementById('clouds');
  const humidityPlaceholder = document.getElementById('humidity');
  const pressurePlaceholder = document.getElementById('pressure');
  const imagePlaceholder = document.getElementById('weather-icon');

  cityPlaceholder.innerHTML = '';
  temperaturePlaceholder.innerHTML = '';
  descriptionPlaceholder.innerHTML = '';
  feelsPlaceholder.innerHTML = '';
  cloudsPlaceholder.innerHTML = '';
  humidityPlaceholder.innerHTML = '';
  pressurePlaceholder.innerHTML = '';
  imagePlaceholder.src = '';
}

function weatherContainer() {
  const weatherContainer = document.getElementById('weather-container');
  const emptyContainer = document.getElementById('empty-container');

  weatherContainer.classList.remove('invisible'); // Displaying skelleton
  if (!emptyContainer.classList.contains('invisible')) emptyContainer.classList.add('invisible');
}

function error() {
  const weatherContainer = document.getElementById('weather-container');
  const emptyContainer = document.getElementById('empty-container');

  weatherContainer.classList.add('invisible');
  emptyContainer.classList.remove('invisible');
}

function weather({
  locationName, temperature, description, feels, clouds, humidity, pressure, weatherIconUrl,
}) {
  const cityPlaceholder = document.getElementById('location');
  const temperaturePlaceholder = document.getElementById('temp');
  const descriptionPlaceholder = document.getElementById('description');
  const feelsPlaceholder = document.getElementById('feels');
  const cloudsPlaceholder = document.getElementById('clouds');
  const humidityPlaceholder = document.getElementById('humidity');
  const pressurePlaceholder = document.getElementById('pressure');
  const imagePlaceholder = document.getElementById('weather-icon');

  cityPlaceholder.innerHTML = locationName;
  temperaturePlaceholder.innerHTML = temperature;
  descriptionPlaceholder.innerHTML = description;
  feelsPlaceholder.innerHTML = feels;
  cloudsPlaceholder.innerHTML = clouds;
  humidityPlaceholder.innerHTML = humidity;
  pressurePlaceholder.innerHTML = pressure;
  imagePlaceholder.src = weatherIconUrl;
}


export {
  searchSuggestions,
  clear,
  weather,
  weatherContainer,
  error,
};
