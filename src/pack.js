function weatherInfo(response) {
    let weatherTemperatureElement = document.querySelector("#weather-temperature");
    weatherTemperatureElement.innerHTML = response.data.temperature.current;
    
    console.log(response.data.temperature.current);
}

function searchCity(city) {
    let apiKey = "bf8f1010b3c486eaa378at4e5eo24f84";
    let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial';
    axios.get(apiUrl).then(weatherInfo); 

}

function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}
    
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);