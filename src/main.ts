import { getChuckJoke, getDadJoke } from "./scripts/jokes/joke-services";
import { jokeReport, scoreJoke } from "./scripts/jokes/score";
import { enableScoreButtons, showGivenScore, showJoke, showJokeUnavailable } from "./scripts/jokes/ui";
import { showMap } from "./scripts/map/ui";
import type { Joke, Weather } from "./scripts/types/types";
import { showWeather, showWeatherUnavailable } from "./scripts/weather/ui";
import { getCurrentWeather, getLocationPermission } from "./scripts/weather/weather-services";

let currentJoke: Joke | undefined;

function setScoreButtons(): void {
    const scoreBtn = document.querySelectorAll(".score-button");
    scoreBtn.forEach(button => {
        const btn = button as HTMLButtonElement;
        const score = Number(btn.dataset.score);
        btn.addEventListener("click", () => {
            if (currentJoke) {
                scoreJoke(score, currentJoke);
                console.log(jokeReport);
                showGivenScore(score);
            }
        });
    });
}

async function loadJoke() {
    const random = Math.floor(Math.random() * 2);
    try {
        const joke = random === 0 ? await getDadJoke() : await getChuckJoke();
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