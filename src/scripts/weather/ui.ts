export function showWeather(temperature: number, icon: string) {
    const widget = document.getElementById("temperature-widget") as HTMLDivElement
    widget.innerHTML = `
    <p>Temperature: ${temperature} °C</p> <img class=weather-icon src=https://openweathermap.org/img/wn/${icon}@2x.png>
    `
}