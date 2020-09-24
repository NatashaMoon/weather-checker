const inputHTML = (cityName, response) => {
  return `<h1>Weather Checker</h1>
    <input type="text" class="city-input" placeholder="City Name">${cityName}
    <button type="button" class="submit-btn">Search</button>
    <div id="response">
    <p id="response-card">${response}</p>
    </div>`;
};

const responseCard = document.getElementById("response-card");
const submitClick = document.getElementsByClassName("submit-btn");

search = () => {
  fetch(
    "api.openweathermap.org/data/2.5/weather?q={city name}&appid=bd943d476ec2ddd5df9f95265d3c70de"
  )
    .then((response) => response.json())
    .then((data) => {
      data.results = responseCard;
      responseCard.innerHTML = `<p id="response-card">${response}</p>`;
    });
  btnClick = () => {
    responseCard.addEventListener("click", () => search);
  };
};

console.log(responseCard);
