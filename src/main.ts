import { getRandomJoke } from "./scripts/api-manager/joke-services";
import { getCurrentWeather, getLocationPermission } from "./scripts/api-manager/weather-services";
import { jokeReport, scoreJoke } from "./scripts/jokes/score";
import { disableScoreButtons, enableScoreButtons, showJoke, showJokeUnavailable } from "./scripts/jokes/ui";
import { showMap } from "./scripts/map/ui";
import type { Joke, Weather } from "./scripts/types/types";
import { showWeather, showWeatherUnavailable } from "./scripts/weather/ui";

let currentJoke: Joke | undefined;

function setScoreButtons() {
    const scoreBtn = document.querySelectorAll(".score-button");
    scoreBtn.forEach(button => {
        const btn = button as HTMLButtonElement;
        const score = Number(btn.dataset.score);
        btn.addEventListener("click", () => {
            if (currentJoke) {
                scoreJoke(score, currentJoke);
                console.log(jokeReport);
                disableScoreButtons(score);
            }
        });
    });
}

async function loadJoke() {
    try {
        const joke = await getRandomJoke();
        if (joke) {
            showJoke(joke);
            currentJoke = joke;
            enableScoreButtons();
            setScoreButtons();
        }
    } catch {
        showJokeUnavailable();
    }
};

loadJoke();

const scoreCtn = document.querySelector(".score-container") as HTMLDivElement;
scoreCtn.addEventListener("click", (e: MouseEvent | TouchEvent) => {
    const target = e.target as HTMLButtonElement;
    if (!target || target.type !== "submit") return;
    else {
        jokeReport.pop();
        enableScoreButtons();
        setScoreButtons();
    }
})

async function loadUserLocationInfo() {
    await getLocationPermission();
    showMap();
    try {
        const weatherData: Weather = await getCurrentWeather();
        if (weatherData) showWeather(weatherData);
    } catch {
        showWeatherUnavailable();
    }
}

loadUserLocationInfo();

const jokeBtn = document.getElementById("joke-button") as HTMLButtonElement;
jokeBtn.addEventListener("click", loadJoke);