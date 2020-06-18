function onSearch(functionToCall) {
  const searchIcon = document.getElementById("search-icon");
  const locationInput = document.getElementById("location-input");

  searchIcon.onclick = () => { functionToCall(locationInput.value) };
}

export default onSearch;
