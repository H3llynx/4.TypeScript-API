import { getRandomJoke } from "./scripts/api-manager/services";
import { jokeReport, rateJoke } from "./scripts/jokes/score";
import { disableScoreButtons, enableScoreButtons, showJoke } from "./scripts/jokes/ui";

let currentJoke : {id: string; joke: string; status: number};

async function loadJoke() {
const joke = await getRandomJoke();
showJoke(joke);
currentJoke = joke;
enableScoreButtons();
}

loadJoke();

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