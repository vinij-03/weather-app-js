let weather = {
  apiKey: "ffffb68da00f73dfb6df6b7dca8fab36",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp_min, temp_max, humidity } = data.main;
    const { speed } = data.wind;
    //putting the value
    // console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".title").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp_max + "°C / " + temp_min + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".windspeed").innerText =
      "Wind speed: " + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-input").value);
  },
};

document.querySelector(".search-btn").addEventListener("click", function () {
  weather.search();
});
document
  .querySelector(".search-input")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

// weather.fetchWeather("kolkata")
