let temperature = document.getElementById("placetemp");
let weathertype = document.getElementById("weathertype");
let weathertypeimg = document.getElementById("weather-type-img");

function citysubmit() {
  let cityname = document.getElementById("mycity").value;
  // let cityname = "jabalpur";

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a5905030ca9c50c3a516d13d5fd3bd59`;
  // console.log(url);

  document.getElementById("displaycityname").innerHTML = cityname;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("city-error").style.display = "none";
      console.log("Data", data);
      weathertype.innerHTML = data.weather[0].main;
      temp = data.main.temp - 273.15;
      temperature.innerHTML = temp.toFixed(2) + " °C";
      document.getElementById("weathercard").style.display = "flex";

      if (data.weather[0].main == "Clouds") {
        weathertypeimg.src = "./img/icons/cloudy.png";
      } else if (data.weather[0].main == "Clear") {
        weathertypeimg.src = "./img/icons/sun.png";
      } else if (data.weather[0].main == "Rain") {
        weathertypeimg.src = "./img/icons/rain.png";
      } else if (data.weather[0].main == "Snow") {
        weathertypeimg.src = "./img/icons/snowman.png";
      } else if (data.weather[0].main == "Thunderstorm") {
        weathertypeimg.src = "./img/icons/thunder.png";
      } else if (data.weather[0].main == "Drizzle") {
        weathertypeimg.src = "./img/icons/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weathertypeimg.src = "./img/icons/mist.png";
      } else if (data.weather[0].main == "Smoke") {
        weathertypeimg.src = "./img/icons/smoke.png";
      } else if (data.weather[0].main == "Haze") {
        weathertypeimg.src = "./img/icons/haze.png";
      } else if (data.weather[0].main == "Dust") {
        weathertypeimg.src = "./img/icons/dust.png";
      } else if (data.weather[0].main == "Fog") {
        weathertypeimg.src = "./img/icons/fog.png";
      } else if (data.weather[0].main == "Sand") {
        weathertypeimg.src = "./img/icons/sand.png";
      } else if (data.weather[0].main == "Ash") {
        weathertypeimg.src =
          "https://img.icons8.com/color/48/000000/fog-day.png";
      } else if (data.weather[0].main == "Squall") {
        weathertypeimg.src =
          "https://img.icons8.com/color/48/000000/fog-day.png";
      } else if (data.weather[0].main == "Tornado") {
        weathertypeimg.src = "./img/icons/hurricane.png";
      } else {
        weathertypeimg.src = "./img/icons/sun.png";
      }
    })
    .catch((error) => {
      document.getElementById("city-error").style.display = "flex";
      document.getElementById("weathercard").style.display = "none";
      console.log(error.message);
    });
}
