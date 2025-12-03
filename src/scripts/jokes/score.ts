import type { Joke, ScoredJoke } from "../types/types";
export const jokeReport: ScoredJoke[] = []

export function scoreJoke(value: number, joke: Joke): void {
    const alreadyScored = jokeReport.find(scored => scored.id === joke.id);
    if (alreadyScored) {
        alreadyScored.score = value;
    } else {
        jokeReport.push({
            id: joke.id,
            joke: joke.joke,
            score: value,
            date: new Date().toISOString()
        })
    }
};