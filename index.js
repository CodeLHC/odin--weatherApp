import { domUpdaters } from "./domUpdaters.mjs";
// import moment from "moment/moment";

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
      const specificOverviewInfo = threeDayInfo.map(({ date, day }) => {
        return {
          date: date,
          averageTemp: day.avgtemp_c,
          maxTemp: day.maxtemp_c,
          minTemp: day.mintemp_c,
          conditionOverview: day.condition.text,
          chanceOfRain: day.daily_chance_of_rain,
        };
      });

      const locationName = response.location.name;
      const locationRegion = response.location.region;
      const locationCountry = response.location.country;

      const todaysForecast = {
        currentTemp: response.current.temp_c,
        tempFeelsLike: response.current.feelslike_c,
        humidity: response.current.humidity,
        windSpeed: response.current.wind_mph,
        condition: response.current.condition.text,
        conditionIcon: response.current.condition.icon,
      };

      console.log(response);
      console.log({ specificOverviewInfo });
      domUpdaters.updateLocation(locationName);
      domUpdaters.updateRegionAndCountry(locationRegion, locationCountry);

      const dateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      };
      const todaysDateFormatted = new Date(
        response.location.localtime
      ).toLocaleDateString("en-GB", dateOptions);
      const todaysTimeFormatted = new Date(response.location.localtime)
        .toLocaleTimeString()
        .slice(0, 5);
      domUpdaters.updateTodaysDate(todaysDateFormatted, todaysTimeFormatted);
      domUpdaters.updateTodaysForecast(todaysForecast, specificOverviewInfo);
      domUpdaters.updateThreeDayOverview(specificOverviewInfo);
    });
}

const searchButton = document.getElementById("submitButton");
const searchBar = document.getElementById("searchBar");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  getThreeDayForecast(searchBar.value);
});
