function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = searchInput.value;
}
    
    let searchInput = document.querySelector("#search-input");
    searchInput.addEventListener("submit", search);