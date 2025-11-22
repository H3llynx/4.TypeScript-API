export function showJoke(joke: string) {
    const jokeP = document.getElementById("joke-text") as HTMLParagraphElement;
    jokeP.textContent = joke;
}

export function showChuckJoke(joke: string) {
    const jokeP = document.getElementById("joke-text") as HTMLParagraphElement;
    jokeP.textContent = joke;
}

export function disableScoreButtons() {
    const scoreCtn = document.querySelectorAll(".score-button");
    scoreCtn.forEach(button => {
        const btn = button as HTMLButtonElement;
        btn.disabled = true;
    })
}

export function enableScoreButtons() {
    const scoreCtn = document.querySelectorAll(".score-button");
    scoreCtn.forEach(button => {
        const btn = button as HTMLButtonElement;
        btn.disabled = false;
    })
}