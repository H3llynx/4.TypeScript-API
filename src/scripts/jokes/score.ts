export const jokeReport: { joke: string; score: number; date: string }[] = []

export function rateJoke(value: number, joke: string) {
    jokeReport.push({
        joke: joke,
        score: value,
        date: new Date().toISOString()
    })
};