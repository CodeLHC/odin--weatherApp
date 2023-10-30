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

  return { removeAllChildNodes, updateLocation };
})();

export { domUpdaters };
