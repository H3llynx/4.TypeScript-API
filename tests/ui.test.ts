import { beforeEach, describe, expect, it } from "vitest";
import { jokeReport } from "../src/scripts/jokes/score";
import { enableScoreButtons, showGivenScore, showJoke } from "../src/scripts/jokes/ui";
import type { Joke } from "../src/scripts/types/types";

describe("showJoke Test", () => {
    beforeEach(() => {
        document.body.innerHTML = `
      <div id="joke-container">
        <p id="joke-text"></p>
      </div>
    `;
    });

    it("displays the joke", () => {
        const joke: Joke = {
            joke: "Blobfish",
            type: "dad",
            id: "blob-1"
        };
        const jokeP = document.getElementById("joke-text") as HTMLParagraphElement;
        showJoke(joke);
        expect(jokeP.textContent).toBe("Blobfish");
    });

    it("adds a specific class for Chuck Norris jokes", () => {
        const joke: Joke = {
            joke: "Chuck Norris can divide by zero",
            type: "chuck",
            id: "chuck-1"
        };
        const jokeCtn = document.getElementById("joke-container") as HTMLElement;
        showJoke(joke);
        expect(jokeCtn.classList.contains("chuck")).toBe(true);
    });
});

describe("enableScoreButtons Test", () => {
    beforeEach(() => {
        document.body.innerHTML = `<div class="score-container" role="group" aria-label="Score this joke"></div>`;
    });
    it("shows the score buttons", () => {
        enableScoreButtons();
        const scoreCtn = document.querySelector(".score-container") as HTMLDivElement;
        const buttons = scoreCtn.querySelectorAll(".score-button");
        expect(buttons).toHaveLength(3);
    });
});

describe("showGivenScore Test", () => {
    beforeEach(() => {
        document.body.innerHTML = `
        <div class="score-container" role="group" aria-label="Score this joke">
        <button tabindex="0" aria-label="score 3 stars" class="score-button" data-score="3">3
        </button>
        <button tabindex="0" class="score-button" aria-label="score 2 stars" data-score="2">2
        </button>
        <button tabindex="0" class="score-button" aria-label="score 1 star" data-score="1">1
        </button>
        <span aria-hidden="true">Score this joke: </span>
        </div>
        `;
    });
    it("adds the scored class", () => {
        const joke: Joke = {
            joke: "Blobfish",
            type: "dad",
            id: "blob-1"
        }
        jokeReport.push(
            {
                id: "blob-1",
                joke: "Blobfish",
                score: 3,
                date: "05-02-2025"
            }
        );
        showGivenScore(joke);
        const scoreCtn = document.querySelector(".score-container") as HTMLDivElement;
        const buttons = scoreCtn.querySelectorAll(".score-button");
        buttons.forEach(button => {
            expect(button.classList.contains("scored")).toBe(true);
        })
    });
});