function weatherInfo(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#current-city");

    cityElement.innerHTML = response.data.city;
   temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
    let apiKey = "bf8f1010b3c486eaa378at4e5eo24f84";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(weatherInfo); 
}

function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    
    searchCity(searchInput.value);
}
    
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);


searchCity("Paris");

