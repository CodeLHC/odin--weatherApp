import { domUpdaters } from "./domUpdaters.mjs";
// Write the functions that hit the API. You’re going to want functions
// that can take a location and return the weather data for that location.
// For now, just console.log() the information.

// https://api.weatherapi.com/v1/forecast.json?key=4550e8f9b39144c3934144630232610&q=manchester&days=3

// async function getCurrentLocation(location) {
//   const response = await fetch(
//     `https://api.weatherapi.com/v1/current.json?key=4550e8f9b39144c3934144630232610&q=${location}`
//   );
//   response.json().then(function (response) {
//     console.log(response);
//   });
// }

// getCurrentLocation("manchester");

async function getThreeDayForecast(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=4550e8f9b39144c3934144630232610&q=${location}&days=3`,
    {
      mode: "cors",
    }
  );
  response
    .json()

    .then(function (response) {
      const threeDayInfo = response.forecast.forecastday;

      const specificInfo = threeDayInfo.map(({ date, day }) => {
        return {
          date: date,
          averageTemp: day.avgtemp_c,
          maxTemp: day.maxtemp_c,
          minTemp: day.mintemp_c,
          conditionOverview: day.condition.text,
          chanceOfRain: day.daily_chance_of_rain,
        };
      });

      // add to above what needed
      const locationName = response.location.name;
      const locationRegion = response.location.region;
      const locationCountry = response.location.country;
      //   console.log(locationName, locationRegion, locationCountry);
      console.log(response);
      console.log({ specificInfo });
      domUpdaters.updateLocation(locationName);
      domUpdaters.updateRegionAndCountry(locationRegion, locationCountry);
      domUpdaters.updateDate(response.location.localtime);
      domUpdaters.updateThreeDayOverview(specificInfo);
    });
}

// Write the functions that process the JSON data you’re getting
// from the API and return an object with only the data you require for your app.

// need:
// temp
// humidity
// chance of Rain
// wind speed

const searchButton = document.getElementById("submitButton");
const searchBar = document.getElementById("searchBar");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("search button greeting");
  getThreeDayForecast(searchBar.value);
});
