import MiniAlert from "./mini-alert.js";

const API_KEY = "d053c4c493d5a54a4354a9b4106fb27b";
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const cityName = document.getElementById("city-name");
const weatherInfo = document.getElementById("weather-info");

// Event
searchBtn.addEventListener("click", searchWeather);
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchWeather();
  }
});

async function searchWeather() {
  const city = cityInput.value.trim();

  if (city === "") {
    MiniAlert.fire({
      title: "앗!",
      message: "도시 이름을 입력해주세요",
      closeBackdrop: false,
    });
    return;
  }

  try {
    // 로딩 상태 표시
    showLoading();

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric&lang=kr`;

    const res = await fetch(API_URL);
    if (!res.ok)
      throw new Error(`날씨 정보를 가져올 수 없습니다: ${res.status}`);

    const data = await res.json();
    console.log(data);

    // 날씨 정보 표시
    displayWeather(data);
  } catch (err) {
    console.error(err);
    showError(err.message);
  }
}

function displayWeather(weatherData) {
  const city = weatherData.name;
  const country = weatherData.sys.country;
  const temp = Math.round(weatherData.main.temp);
  const description = weatherData.weather[0].description;
  const humidity = weatherData.main.humidity;
  const windSpeed = weatherData.wind.speed;

  cityName.textContent = `${city}, ${country}`;
  weatherInfo.innerHTML = `
    <p>🌡️ 온도: ${temp}°C</p>
    <p>☁️ 날씨: ${description}</p>
    <p>💧 습도: ${humidity}%</p>
    <p>💨 바람: ${windSpeed}m/s</p>
  `;
}

function showLoading() {
  cityName.textContent = "검색 중...";
  weatherInfo.innerHTML = "<p>날씨 정보를 가져오는 중입니다...</p>";
}

function showError(message) {
  cityName.textContent = "오류 발생";
  weatherInfo.innerHTML = `<p style="color: red;">${message}</p>`;
}
