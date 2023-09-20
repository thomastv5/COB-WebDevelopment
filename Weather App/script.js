let weather = {
  apiKey: "9baaa69b7f0184edb8e99dba85802716",
  currentUnit: "metric",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=" +
        this.currentUnit +
        "&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name, sys } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { pressure } = data.main;
    const { timezone, dt } = data;

    document.querySelector(".city").innerText = `Weather in ${name}, ${sys.country}`;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + (this.currentUnit === "metric" ? "°C" : "°F");
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + (this.currentUnit === "metric" ? " km/h" : " mph");
    document.querySelector(".pressure").innerText =
      "Atmospheric Pressure: " + pressure + " hPa";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";

   
    const utcTime = new Date(dt * 1000);
    const localTime = new Date(utcTime.getTime() + timezone * 1000);

    const timeFormat = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    const formattedTime = timeFormat.format(localTime);
    document.querySelector(".time").innerText = "Time: " + formattedTime;

    const dateFormat = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const formattedDate = dateFormat.format(localTime);
    document.querySelector(".date").innerText = "Date: " + formattedDate;
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

document.getElementById("celsius-button").addEventListener("click", function () {
  weather.currentUnit = "metric";
  weather.search();
  updateUnitButtons();
});

document.getElementById("fahrenheit-button").addEventListener("click", function () {
  weather.currentUnit = "imperial";
  weather.search();
  updateUnitButtons();
});

function updateUnitButtons() {
  document.querySelectorAll(".unit-button").forEach((button) => {
    button.classList.remove("active");
  });

  const activeButtonId = weather.currentUnit === "metric" ? "celsius-button" : "fahrenheit-button";
  document.getElementById(activeButtonId).classList.add("active");
}

weather.fetchWeather("Chennai");

function convertTimeStamp(timestamp, timezone) {
  const utcTime = new Date(timestamp * 1000); 
  const localTime = new Date(utcTime.getTime() + timezone * 1000); 

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return localTime.toLocaleString("en-US", options);
}

function convertCountryCode(country) {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  return regionNames.of(country);
}





