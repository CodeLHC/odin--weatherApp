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
    `https://api.weatherapi.com/v1/forecast.json?key=4550e8f9b39144c3934144630232610&q=${location}&days=3`
  );
  response
    .json()

    .then(function (response) {
      const threeDayInfo = response.forecast.forecastday;
      console.log({ response });
      console.log({ threeDayInfo });

      const specificInfo = threeDayInfo.map((day) => {
        console.log({ day });
        return day.date;
      });
      const locationName = response.location.name;
      const locationRegion = response.location.region;
      const locationCountry = response.location.country;
      //   console.log(locationName, locationRegion, locationCountry);
      console.log({ specificInfo });
    });
}

getThreeDayForecast("manchester");

// Write the functions that process the JSON data you’re getting
// from the API and return an object with only the data you require for your app.

// need:
// temp
// humidity
// chance of Rain
// wind speed