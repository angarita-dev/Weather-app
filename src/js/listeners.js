function getLocationValue() {
  const locationInput = document.getElementById('location-input');

  return locationInput.value;
}

function onSearch(searchLocationFunction) {
  const searchIcon = document.getElementById('search-icon');

  searchIcon.onclick = () => { searchLocationFunction(getLocationValue()); };
}

function unitChange(searchLocationFunction) {
  const unitInput = document.getElementById('unit-input');
  const unitOptions = Array.from(document.getElementsByClassName('unit-toggle'));

  const removeSelectedOption = () => { unitOptions.forEach(unitOption => { unitOption.classList.remove('selected'); }); };

  unitOptions.forEach(unitOption => {
    unitOption.onclick = () => {
      if (unitOption.classList.contains('selected')) return;

      removeSelectedOption();
      unitInput.value = unitOption.id;
      unitOption.classList.add('selected');
      searchLocationFunction(getLocationValue());
    };
  });
}

export {
  onSearch,
  unitChange,
};
