import { getForecast } from "./getForecast.mjs";

getForecast("Manchester");

const searchButton = document.getElementById("submitButton");
const searchBar = document.getElementById("searchBar");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  getForecast(searchBar.value);
  searchBar.value = "";
});
