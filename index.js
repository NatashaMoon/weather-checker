const responseCard = document.getElementById("response-card");
const submitClick = document.getElementsByClassName("submit-btn");

inputHTML = (cityName, response) => {
  const itemHTML = `<h1>Weather Checker</h1>
    <input type="text" class="city-input" placeholder="City Name">${cityName}
    <button type="button" class="submit-btn">Search</button>
    <div id="response">
    <p id="response-card">${response}</p>
    </div>`;
  responseCard.innerHTML = itemHTML;
};

search = () => {
  fetch(
    "api.openweathermap.org/data/2.5/weather?q=`${cityName}`&appid="
  ).then((response) => response.json());
  console.log(response);
    .then((data) => {
      let city = data;
      JSON.parse(city);
    });
  btnClick = () => {
    submitClick.addEventListener("click", city);
  };
};
