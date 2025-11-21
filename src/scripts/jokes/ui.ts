export function showJoke(data :{id: string; joke: string; status: number}) {
    const jokeP = document.getElementById("joke-text") as HTMLParagraphElement;
    jokeP.textContent = data.joke;
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