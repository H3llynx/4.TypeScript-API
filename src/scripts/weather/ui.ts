import type { Weather } from "../types/types";
const widget = document.getElementById("temperature-widget") as HTMLDivElement

export function showWeather(data: Weather) {
    widget.innerHTML = `
    <p>Temperature: ${data.temperature} °C</p> <img class=weather-icon src=https://openweathermap.org/img/wn/${data.icon}@2x.png>
    `;
}

export function showWeatherUnavailable() {
    widget.innerHTML = `
    <img src="/src/assets/images/star.png" class="star">
    <p class="no-location-p">Enable location in your browser settings to see the current weather information.</p>
    `;
}