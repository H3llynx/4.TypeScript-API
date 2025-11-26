import { getRandomJoke } from "./scripts/api-manager/joke-services";
import { getCurrentWeather, getLocationPermission } from "./scripts/api-manager/weather-services";
import { jokeReport, scoreJoke } from "./scripts/jokes/score";
import { disableScoreButtons, enableScoreButtons, showJoke } from "./scripts/jokes/ui";
import { showMap } from "./scripts/map/ui";
import { showWeather } from "./scripts/weather/ui";

let currentJoke: { joke: string; type: string } | undefined;

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
    const joke = await getRandomJoke();
    if (joke) {
        showJoke(joke);
        currentJoke = joke;
        enableScoreButtons();
        setScoreButtons();
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
    const weatherData: { temperature: number; icon: string } | undefined = await getCurrentWeather();
    if (weatherData) {
        showWeather(weatherData.temperature, weatherData.icon);
    }
}

loadUserLocationInfo();


const jokeBtn = document.getElementById("joke-button") as HTMLButtonElement;
jokeBtn.addEventListener("click", loadJoke);