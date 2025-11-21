import { getRandomJoke } from "./scripts/api-manager/services";

import { showJoke } from "./scripts/jokes/ui";

let currentJoke : {id: string; joke: string; status: number};

async function loadJoke() {
const joke = await getRandomJoke();
showJoke(joke);
currentJoke = joke;
}

loadJoke();

const jokeBtn = document.getElementById("joke-button") as HTMLButtonElement;
jokeBtn.addEventListener("click", loadJoke);

