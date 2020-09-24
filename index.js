const responseCard = document.getElementById("response-card");
// const submitClick = document.getElementsByClassName("submit-btn");
const formInput = document.getElementById("form-input");
const inputBox = document.getElementById("city-input");

formInput.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&appid={apikey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const itemHTML = `
          <div id="response">
          <p id="response-card">${data}</p>
          </div>`;
      const output = data;
      console.log(output);
      responseCard.innerHTML = output.name + output.main.temp;
    });
});
