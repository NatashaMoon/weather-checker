const responseCard = document.getElementById("response-card");
const formInput = document.getElementById("form-input");
const inputBox = document.getElementById("city-input");
const cardContainer = document.getElementById("card-container");

// variable containing emojis
const emojis = {
  "01d": "☀️",
  "02d": "⛅️",
  "03d": "☁️",
  "04d": "☁️",
  "09d": "🌧",
  "10d": "🌦",
  "11d": "⛈",
  "13d": "❄️",
  "50d": "💨",
  "01n": "☀️",
  "02n": "⛅️",
  "03n": "☁️",
  "04n": "☁️",
  "09n": "🌧",
  "10n": "🌦",
  "11n": "⛈",
  "13n": "❄️",
  "50n": "💨",
};

// variable containing colours to change background
const backgroundColour = {
  "01d": "#ffc028",
  "02d": "#91d7ff",
  "03d": "#dcecff",
  "04d": "#dcecff",
  "09d": "#7d9fb0",
  "10d": "#7179a1",
  "11d": "#3e4f58",
  "13d": "#ccebf0",
  "50d": "#97c2c2",
  "01n": "#ffc028",
  "02n": "#91d7ff",
  "03n": "#dcecff",
  "04n": "#dcecff",
  "09n": "#7d9fb0",
  "10n": "#7179a1",
  "11n": "#3e4f58",
  "13n": "#ccebf0",
  "50n": "#97c2c2",
};

// click button event listener
formInput.addEventListener("submit", (event) => {
  event.preventDefault();
  cardContainer.style.display = "none";
  // weather API
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&&units=metric&appid={APIkey}`
  )
    .then((response) => response.json())
    .then((output) => {
      const colour = backgroundColour[output.weather[0].icon];
      const emoji = emojis[output.weather[0].icon];
      document.body.style.backgroundColor = colour;
      const itemHTML = (name, temp, feelsLike, description, emoji) =>
        `<div class="card" style="width: 18rem">
      <div class="card-body" id="response-card">
        <h3 class="card-title">${output.name}</h3>
        <h5>The temperature is ${output.main.temp}°c</h5>
        <p class="card-text">Feels like ${output.main.feels_like}°c
        <br>
        ${emojis[output.weather[0].icon]} ${output.weather[0].description}</p>
      </div>
    </div>`;
      console.log(output);
      responseCard.innerHTML = itemHTML();
      cardContainer.style.display = "block";
    })
    // error message for invalid/incorrect city names
    .catch((error) => {
      const errorMsg = `<p><b>Invalid city name</b></p>`;
      responseCard.innerHTML = errorMsg;
      cardContainer.style.display = "block";
    });
});

// Google places search function
function initialize() {
  var options = {
    types: ["(cities)"],
  };
  var autocomplete = new google.maps.places.Autocomplete(inputBox, options);
}
google.maps.event.addDomListener(window, "load", initialize);
