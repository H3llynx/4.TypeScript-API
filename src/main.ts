import { getRandomJoke } from "./scripts/api-manager/joke-services";
import { getLocationPermission } from "./scripts/api-manager/weather-services";
import { jokeReport, rateJoke } from "./scripts/jokes/score";
import { disableScoreButtons, enableScoreButtons, showJoke } from "./scripts/jokes/ui";
import { showWeather } from "./scripts/weather/ui";

let currentJoke: { id: string; joke: string; status: number };

async function loadJoke() {
    const joke = await getRandomJoke();
    showJoke(joke);
    currentJoke = joke;
    enableScoreButtons();
}

loadJoke();
//const weatherData = localStorage.getItem("weather") || await getCurrentWeather();
showWeather(8, "https://i.ibb.co/Dm6y5cr/blobfish.webp");

const jokeBtn = document.getElementById("joke-button") as HTMLButtonElement;
jokeBtn.addEventListener("click", loadJoke);

document.querySelectorAll(".score-button").forEach(button => {
    const btn = button as HTMLButtonElement
    const score = Number(btn.dataset.score);
    btn.addEventListener("click", () => {
        rateJoke(score, currentJoke);
        console.log(jokeReport);
        disableScoreButtons();
    });
})

const allowLocationBtn = document.getElementById("position-permission") as HTMLButtonElement;
allowLocationBtn.addEventListener("click", () => {
    console.log("clicked");
    getLocationPermission();
})