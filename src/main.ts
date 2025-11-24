import { getRandomJoke } from "./scripts/api-manager/joke-services";
import { getLocationPermission } from "./scripts/api-manager/weather-services";
import { jokeReport, rateJoke } from "./scripts/jokes/score";
import { disableScoreButtons, enableScoreButtons, showJoke } from "./scripts/jokes/ui";
import { showMap } from "./scripts/map/ui";
import { showWeather } from "./scripts/weather/ui";
// getCurrentWeather

let currentJoke: { joke: string; type: string } | undefined;

async function loadJoke() {
    const joke = await getRandomJoke();
    if (joke) {
        showJoke(joke);
        currentJoke = joke;
        enableScoreButtons();
    }
}

loadJoke();

async function loadUserLocationInfo() {
    await getLocationPermission();
    showWeather(8, "https://i.ibb.co/Dm6y5cr/blobfish.webp");
    showMap();
    // const weatherData: { temperature: number; icon: string } | undefined = await getCurrentWeather();
    // if (weatherData) {
    //     showWeather(weatherData.temperature, weatherData.icon);
    // }
}

loadUserLocationInfo();

const jokeBtn = document.getElementById("joke-button") as HTMLButtonElement;
jokeBtn.addEventListener("click", loadJoke);

document.querySelectorAll(".score-button").forEach(button => {
    const btn = button as HTMLButtonElement
    const score = Number(btn.dataset.score);
    btn.addEventListener("click", () => {
        if (currentJoke) {
            rateJoke(score, currentJoke);
            console.log(jokeReport);
            disableScoreButtons();
        }
    });
})