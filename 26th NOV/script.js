
const input = document.querySelector("input");
const displayCity = document.getElementById("display-city")
const displaytemp = document.getElementById("display-temp")
const description = document.getElementById("display-description");
  async function fetchweather (){
    const city = input.value;
    const weather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/2024-11-26?unitGroup=us&key=ENXU88YAAC4G77BL7GHCS5JET&contentType=json`)
    const data = await weather.json();
    console.log(data);

  displayCity.innerHTML = data.resolvedAddress;
  displaytemp.innerHTML = data.currentConditions.temp;
  description.innerHTML = data.days[0].description;
  }