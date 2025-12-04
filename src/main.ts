import { getChuckJoke, getDadJoke } from "./scripts/jokes/joke-services";
import { scoreJoke } from "./scripts/jokes/score";
import { enableScoreButtons, showGivenScore, showJoke, showJokeUnavailable } from "./scripts/jokes/ui";
import { showMap } from "./scripts/map/ui";
import type { Joke, Weather } from "./scripts/types/types";
import { showWeather, showWeatherUnavailable } from "./scripts/weather/ui";
import { getCurrentWeather, getLocationPermission, userLocation } from "./scripts/weather/weather-services";

let currentJoke: Joke;

function setScoreButtons(): void {
    const scoreBtn = document.querySelectorAll(".score-button");
    scoreBtn.forEach(button => {
        const btn = button as HTMLButtonElement;
        const score = Number(btn.dataset.score);
        btn.addEventListener("click", () => {
            if (currentJoke) {
                scoreJoke(score, currentJoke);
                showGivenScore(currentJoke);
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
        if (userLocation.latitude !== undefined && userLocation.longitude !== undefined) {
            const weatherData: Weather = await getCurrentWeather(userLocation.latitude, userLocation.longitude);
            if (weatherData) showWeather(weatherData);
        }
    } catch {
        showWeatherUnavailable();
    }
}

loadUserLocationInfo();

const jokeBtn = document.getElementById("joke-button") as HTMLButtonElement;
jokeBtn.addEventListener("click", loadJoke);