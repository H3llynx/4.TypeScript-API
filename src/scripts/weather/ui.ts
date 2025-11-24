export function showWeather(temperature: number, src: string) {
    const widget = document.getElementById("temperature-widget") as HTMLDivElement
    widget.innerHTML = `
    <p>Temperature: ${temperature} °C</p> <img class=weather-icon src=${src};>
    `
}