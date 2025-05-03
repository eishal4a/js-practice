async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();
    document.getElementById("weather").innerText =
      `Temp: ${data.main.temp}°C, ${data.weather[0].description}`;
  }
  