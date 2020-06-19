function onSearch(functionToCall) {
  const searchIcon = document.getElementById('search-icon');
  const locationInput = document.getElementById('location-input');

  searchIcon.onclick = () => { functionToCall(locationInput.value); };
}

function unitChange() {
  const unitInput = document.getElementById('unit-input');
  const unitOptions = Array.from(document.getElementsByClassName('unit-toggle'));

  const removeSelectedOption = () => { unitOptions.forEach(unitOption => { unitOption.classList.remove('selected'); }); };

  unitOptions.forEach(unitOption => {
    unitOption.onclick = () => {
      if (unitOption.classList.contains('selected')) return;

      removeSelectedOption();
      unitInput.value = unitOption.id;
      unitOption.classList.add('selected');
    };
  });
}

export {
  onSearch,
  unitChange,
};
