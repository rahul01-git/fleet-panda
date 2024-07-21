const cityInput = document.getElementById("city");
const btn = document.getElementById("btn");
const weatherIcon = document.querySelector(".weather-icon");
const convertBtn = document.getElementById("convert");
const tempData = document.querySelector(".temp");
const historyList = document.getElementById("history-list");

const CACHE_DURATION = 3600 * 1000;
const API_KEY = "7e3ac717e69decce8914368c69d28766";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`;

btn.addEventListener("click", async () => {
  const city = cityInput.value.trim().toLowerCase();
  if (city === "") {
    alert("Please enter city name");
  } else {
    fetchData(city);
  }
});

convertBtn.addEventListener("click", () => {
  convertTemp(tempData.innerText);
});

async function fetchData(city = "kathmandu") {
  const cachedData = getCachedData(city);
  if (cachedData) {
    displayWeatherData(cachedData);
  } else {
    try {
      const response = await fetch(`${API_URL}&q=${city}`);
      const data = await response.json();

      if (data.cod === 200) {
        const cityName = data.name.toLowerCase();
        cacheData(cityName, data);
        displayWeatherData(data);
      } else {
        alert("City not found");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data");
    }
  }
}

function getCachedData(city) {
  const cached = localStorage.getItem(city);
  if (cached) {
    const { timestamp, data } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_DURATION) {
      return data;
    } else {
      localStorage.removeItem(city);
    }
  }
  return null;
}

function cacheData(city, data) {
  localStorage.setItem(city, JSON.stringify({ timestamp: Date.now(), data }));
}

async function displayWeatherData(data) {
  const { main, weather, wind, name, sys } = data;
  const temp = main.temp.toFixed(1);
  const icon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
  const countryCode = sys.country;
  const flagUrl = getFlagUrl(countryCode);

  weatherIcon.src = icon;
  tempData.innerText = `${temp} °C`;
  document.querySelector(".city").innerText = `${name}, ${countryCode}`;
  document.querySelector(".country-flag").src = flagUrl;
  document.querySelector(".humidity .humid").innerText = `${main.humidity}%`;
  document.querySelector(".wind .wind-speed").innerText = `${wind.speed} m/s`;

  addToHistory(name.toLowerCase());
}

function addToHistory(city) {
  const existingItems = Array.from(historyList.querySelectorAll("li")).map(
    (item) => item.dataset.city
  );

  if (!existingItems.includes(city)) {
    const listItem = document.createElement("li");
    listItem.textContent = city;
    listItem.dataset.city = city;
    listItem.addEventListener("click", () => fetchData(city));
    historyList.appendChild(listItem);

    if (historyList.querySelectorAll("li").length > 10) {
      historyList.removeChild(historyList.firstChild);
    }
  }
}

function convertTemp(temp) {
  let [value, unit] = temp.split(" ");
  value = parseFloat(value);
  unit = unit === "°C" ? "°F" : "°C";
  const convertedTemp =
    unit === "°C" ? ((value - 32) * 5) / 9 : (value * 9) / 5 + 32;
  tempData.innerText = `${convertedTemp.toFixed(1)} ${unit}`;
}

function populateHistoryData() {
  const history = getAllLocalStorageItems();

  historyList.innerHTML = "";

  history.forEach((key) => {
    const listItem = document.createElement("li");
    listItem.textContent = key;
    listItem.dataset.city = key;
    listItem.addEventListener("click", () => fetchData(key));
    historyList.appendChild(listItem);
  });
}

function getAllLocalStorageItems() {
  return Object.keys(localStorage).filter((key) => localStorage.getItem(key));
}

function getFlagUrl(countryCode) {
  return `https://flagcdn.com/16x12/${countryCode.toLowerCase()}.png`;
}

window.onload = () => {
  populateHistoryData();
  fetchData();
};
