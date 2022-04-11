function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let citySearch = document.querySelector("#city-search");
  cityElement.innerHTML = citySearch.value;
}

function convertToFaren(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temp = temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round((temp * 9) / 5) + 32;
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();

let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);

dateElement.innerHTML = formatDate(currentTime);

let faren = document.querySelector("#faren");
faren.addEventListener("click", convertToFaren);
