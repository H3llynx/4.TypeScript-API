import type { Joke, ScoredJoke } from "../types/types";
export const jokeReport: ScoredJoke[] = []

export function scoreJoke(value: number, joke: Joke): void {
    jokeReport.push({
        joke: joke.joke,
        score: value,
        date: new Date().toISOString()
    })
};