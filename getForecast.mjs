import { domUpdaters } from "./domUpdaters.mjs";
import { helpers } from "./helpers.mjs";

async function getForecast(location) {
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
          conditionIcon: day.condition.icon,
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
      domUpdaters.updateLocation(locationName);
      domUpdaters.updateRegionAndCountry(locationRegion, locationCountry);

      const todaysDateFormatted = helpers.todaysDateFormatted(
        response.location.localtime
      );

      const todaysTimeFormatted = helpers.currentTimeFormatted(
        response.location.localtime
      );
      domUpdaters.updateTodaysDate(todaysDateFormatted, todaysTimeFormatted);
      domUpdaters.updateTodaysForecast(todaysForecast, specificOverviewInfo);
      domUpdaters.updateThreeDayOverview(specificOverviewInfo);
    });
}

export { getForecast };
