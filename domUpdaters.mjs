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

  const updateDate = (date) => {
    const dateText = document.getElementById("dateText");
    removeAllChildNodes(dateText);
    dateText.innerText = date;
  };

  const updateThreeDayOverview = (dayArray) => {
    const threeDayOverview = document.getElementById("threeDayOverview");
    removeAllChildNodes(threeDayOverview);
    dayArray.forEach((day) => {
      const dayOverview = document.createElement("div");
      dayOverview.classList.add("dayOverview");
      dayOverview.innerText = `${day.date}
Average Temperature: ${day.averageTemp}°C
Max Temperature: ${day.maxTemp}°C
Min Temperature:${day.minTemp}°C
Overview of the day:${day.conditionOverview}
Chance of rain:${day.chanceOfRain}%`;
      threeDayOverview.appendChild(dayOverview);
    });
  };

  return {
    removeAllChildNodes,
    updateLocation,
    updateRegionAndCountry,
    updateDate,
    updateThreeDayOverview,
  };
})();

export { domUpdaters };
