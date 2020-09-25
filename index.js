const responseCard = document.getElementById("response-card");
const formInput = document.getElementById("form-input");
const inputBox = document.getElementById("city-input");

const emojis = {
  "01d": "☀️" 
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

formInput.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&&units=metric&appid={appID}`
  )
    .then((response) => response.json())
    .then((output) => {
      let emoji = emojis[output.weather[0].icon];
      const itemHTML = (name, temp, feelsLike, description, emoji) =>
        `<div class="card" style="width: 18rem">
      <div class="card-body" id="response-card">
        <h3 class="card-title">${output.name}</h3>
        <h5>Temperature ${output.main.temp}</h5>
        <p class="card-text">Feels like ${output.main.feels_like}
        <br>
        ${output.weather[0].description} ${emojis[output.weather[0].icon]}</p>
      </div>
    </div>`;
      console.log(output);
      responseCard.innerHTML = itemHTML();
    })
    .catch();
  const error = `<p><b>Invalid city name</b></p>`;
  responseCard.innerHTML = error;
});


