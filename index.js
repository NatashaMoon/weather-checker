const responseCard = document.getElementById("response-card");
const formInput = document.getElementById("form-input");
const inputBox = document.getElementById("city-input");

formInput.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&&units=metric&appid={appid}`
  )
    .then((response) => response.json())
    .then((output) => {
      const itemHTML = (name, temp, feelsLike, description) =>
        `<div class="card" style="width: 18rem">
      <div class="card-body" id="response-card">
        <h5 class="card-title">${output.name}</h5>
        <h3>Temperature ${output.main.temp}</h3>
        <p class="card-text">Feels like ${output.main.feels_like}
        <br>
        ${output.weather[0].description}</p>
      </div>
    </div>`;
      console.log(output);
      responseCard.innerHTML = itemHTML();
    })
    .catch();
  const error = `<p><b>Invalid city name</b></p>`;
  responseCard.innerHTML = error;
});
