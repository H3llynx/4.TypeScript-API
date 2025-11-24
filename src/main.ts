import { getRandomJoke } from "./scripts/api-manager/joke-services";
import { jokeReport, rateJoke } from "./scripts/jokes/score";
import { disableScoreButtons, enableScoreButtons, showJoke } from "./scripts/jokes/ui";
// import { getCurrentWeather } from "./scripts/api-manager/weather-services";
import { showWeather } from "./scripts/weather/ui";

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

// const weatherData: { temperature: number; icon: string } | undefined = await getCurrentWeather();
// if (weatherData) {
//     showWeather(weatherData.temperature, weatherData.icon);
// }

showWeather(8, "https://i.ibb.co/Dm6y5cr/blobfish.webp");

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