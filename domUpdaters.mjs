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
    // const extraOverviewInfo =
    //   document.getElementsByClassName("extraOverviewInfo");

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
        dayOverview.innerText = `${day.date}
  Average Temperature: ${day.averageTemp}°C
  Max Temperature: ${day.maxTemp}°C
  Min Temperature:${day.minTemp}°C
  Overview of the day:${day.conditionOverview}
  Chance of rain:${day.chanceOfRain}%`;
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
