import type { Joke, ScoredJoke } from "../types/types";
export const jokeReport: ScoredJoke[] = []

export function scoreJoke(value: number, joke: Joke): void {
    const alreadyScored = jokeReport.find(scored => scored.id === joke.id);
    if (alreadyScored) {
        if (alreadyScored.score === value) {
            const index = jokeReport.indexOf(alreadyScored)
            jokeReport.splice(index, 1);
        } else {
            alreadyScored.score = value;
            alreadyScored.date = new Date().toISOString();
        }
    } else {
        jokeReport.push({
            id: joke.id,
            joke: joke.joke,
            score: value,
            date: new Date().toISOString()
        })
    }
    console.log(jokeReport);
};