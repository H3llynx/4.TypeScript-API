import { JokeConfig } from "../api-manager/api-config";
import { getData } from "../api-manager/api-service";
import type { Joke } from "../types/types";
import { ChuckSchema, DadSchema } from "../types/zod-validation";

const headers = JokeConfig.headers

export async function getDadJoke(): Promise<Joke> {
    const data = await getData("https://icanhazdadjoke.com/", headers);
    const validated = DadSchema.parse(data);
    return {
        joke: validated.joke,
        type: "dad",
        id: crypto.randomUUID()
    }
}

export async function getChuckJoke(): Promise<Joke> {
    const data = await getData("https://api.chucknorris.io/jokes/random", headers);
    const validated = ChuckSchema.parse(data);
    return {
        joke: validated.value,
        type: "chuck",
        id: crypto.randomUUID()
    }
}



