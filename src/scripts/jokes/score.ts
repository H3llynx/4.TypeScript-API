export const jokeReport: { joke: string; score: number; date: string }[] = []

export function rateJoke(value: number, joke: { joke: string; type: string }) {
    jokeReport.push({
        joke: joke.joke,
        score: value,
        date: new Date().toISOString()
    })
};