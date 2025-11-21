export function showJoke(data :{id: string; joke: string; status: number}) {
    const jokeP = document.getElementById("joke-text") as HTMLParagraphElement;
    jokeP.textContent = data.joke;
}