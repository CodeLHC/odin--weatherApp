import { helpers } from "./helpers.mjs";

const domUpdaters = (() => {
  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  const updateLocation = (location) => {
    const locationTitle = document.getElementById("location");
    removeAllChildNodes(locationTitle);
    locationTitle.innerText = location;
  };

  const updateRegionAndCountry = (region, country) => {
    const regionAndCountry = document.getElementById("regionCountry");
    removeAllChildNodes(regionAndCountry);
    regionAndCountry.innerText = `${region}, ${country}`;
  };

  const updateTodaysDate = (formattedDate, formattedTime) => {
    const dateText = document.getElementById("dateText");
    removeAllChildNodes(dateText);
    dateText.innerText = `${formattedDate}
    ${formattedTime}`;
  };

  const updateTodaysForecast = (todaysForecastObject, dayArray) => {
    const currentTemp = document.getElementById("currentTemp");
    const feelsLike = document.getElementById("feelsLike");
    const humidity = document.getElementById("humidity");
    const chanceOfRain = document.getElementById("chanceOfRain");
    const windSpeed = document.getElementById("windSpeed");
    const forecastIcon = document.getElementById("forecastIcon");
    const forecastText = document.getElementById("forecastText");

    currentTemp.innerText = `${todaysForecastObject.currentTemp}°C`;
    feelsLike.innerText = `${todaysForecastObject.tempFeelsLike}°C`;
    humidity.innerText = `${todaysForecastObject.humidity}%`;
    chanceOfRain.innerText = `${dayArray[0].chanceOfRain}%`;
    windSpeed.innerText = `${todaysForecastObject.windSpeed} m/h`;
    forecastText.innerText = todaysForecastObject.condition;
    forecastIcon.src = todaysForecastObject.conditionIcon;
  };

  const updateThreeDayOverview = (dayArray) => {
    const threeDayOverview = document.getElementById("threeDayOverview");
    removeAllChildNodes(threeDayOverview);
    dayArray.forEach((day) => {
      if (day !== dayArray[0]) {
        const dayOverview = document.createElement("div");
        dayOverview.classList.add("dayOverview");
        const icon = document.createElement("img");
        icon.src = day.conditionIcon;
        dayOverview.appendChild(icon);
        const info = document.createElement("div");
        info.innerText = `${helpers.formatDateToDays(day)}
  Max: ${day.maxTemp}°C
  Min:${day.minTemp}°C`;
        dayOverview.appendChild(info);
        threeDayOverview.appendChild(dayOverview);
      }
    });
  };

  return {
    removeAllChildNodes,
    updateLocation,
    updateRegionAndCountry,
    updateTodaysDate,
    updateThreeDayOverview,
    updateTodaysForecast,
  };
})();

export { domUpdaters };
