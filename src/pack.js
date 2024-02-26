function searchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
  }
  
  let boxSearchElement = document.querySelector("#box-search");
  boxSearchElement.addEventListener("submit", searchSubmit);
  
  