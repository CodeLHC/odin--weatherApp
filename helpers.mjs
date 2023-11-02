const helpers = (() => {
  const todaysDateFormatted = (dateToFormat) => {
    const dateOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    return new Date(dateToFormat).toLocaleDateString("en-GB", dateOptions);
  };

  const currentTimeFormatted = (timeToFormat) => {
    return new Date(timeToFormat).toLocaleTimeString().slice(0, 5);
  };

  const formatDateToDays = (dayToFormat) => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const formattedDate = new Date(dayToFormat.date);
    return weekday[formattedDate.getUTCDay()];
  };

  return { todaysDateFormatted, currentTimeFormatted, formatDateToDays };
})();

export { helpers };
