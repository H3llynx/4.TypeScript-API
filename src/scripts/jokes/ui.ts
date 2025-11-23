export function showJoke(data: { joke: string; type: string }) {
    const jokeP = document.getElementById("joke-text") as HTMLParagraphElement;
    const jokeCtn = document.getElementById("joke-container") as HTMLElement;
    jokeP.textContent = data.joke;
    if (data.type === "chuck") {
        jokeCtn.classList.add("chuck");
    } else jokeCtn.classList.remove("chuck");
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