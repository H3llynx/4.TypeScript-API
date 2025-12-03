import type { Joke } from "../types/types";

const starSvg = `<svg aria-hidden="true"
     xmlns="http://www.w3.org/2000/svg"
     width="24px" height="24px"
     viewBox="0 0 32 32"
     fill="currentColor"
     stroke="none"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">
  <path d="M30.9,12.7C30.8,12.3,30.4,12,30,12h-9.3l-3.8-9.7C16.8,2,16.4,1.7,16,1.7S15.2,2,15.1,2.3L11.3,12H2
    c-0.4,0-0.8,0.3-0.9,0.7c-0.1,0.4,0,0.9,0.3,1.1L9,19.5l-2.6,9.2c-0.1,0.4,0,0.8,0.4,1.1c0.3,0.2,0.8,0.3,1.1,0l8.1-5.3l8.1,5.3
    c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.2c0.3-0.2,0.5-0.7,0.4-1.1L23,19.5l7.6-5.7C30.9,13.5,31.1,13.1,30.9,12.7z M15,18
    c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1V18z M19,18c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1V18z"/>
</svg>`
const jokeP = document.getElementById("joke-text") as HTMLParagraphElement;
const jokeCtn = document.getElementById("joke-container") as HTMLElement;

export function showJoke(data: Joke): void {
  jokeP.textContent = data.joke;
  if (data.type === "chuck") {
    jokeCtn.classList.add("chuck");
  } else jokeCtn.classList.remove("chuck");
}

export function showJokeUnavailable() {
  jokeP.textContent = "It looks like this joke is no longer available. Click on the next button to load a new one!"
}

const scoreCtn = document.querySelector(".score-container") as HTMLDivElement;
export function enableScoreButtons(): void {
  scoreCtn.classList.remove("scored");
  scoreCtn.innerHTML = `
        <button tabindex="0" aria-label="score 3 stars" class="score-button" data-score="3">
        ${starSvg}
        </button>
        <button tabindex="0" class="score-button" aria-label="score 2 stars" data-score="2">
        ${starSvg}
        </button>
        <button tabindex="0" class="score-button" aria-label="score 1 star" data-score="1">
        ${starSvg}
        </button>
        <span aria-hidden="true">Score this joke: </span>
    `;
}

export function showGivenScore(score: number) {
  const scoreBtns = scoreCtn.querySelectorAll("button");
  scoreBtns.forEach(button => {
    const btn = button as HTMLButtonElement
    if (Number(btn.dataset.score) <= score) btn.classList.add("scored")
    else btn.classList.remove("scored")
  })
}