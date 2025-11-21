export const jokeReport :{joke:string; score: number; date: string}[] = []

export function rateJoke(value:number, data :{id: string; joke: string; status: number}) {
    jokeReport.push({
        joke: data.joke,
        score: value,
        date: new Date().toISOString()
    })
};