import { headers, jokesAPI } from "../api-manager/api-config";
import { getData } from "../api-manager/api-service";
import type { Joke } from "../types/types";
import { ChuckSchema, DadSchema } from "../types/zod-validation";

export async function getDadJoke(): Promise<Joke> {
    const data = await getData(jokesAPI.dadURL, headers);
    const validated = DadSchema.parse(data);
    if (!data) throw new Error("Joke unavailable");
    return {
        joke: validated.joke,
        type: "dad",
        id: crypto.randomUUID()
    }
}

export async function getChuckJoke(): Promise<Joke> {
    const data = await getData(jokesAPI.chuckURL, headers);
    const validated = ChuckSchema.parse(data);
    if (!data) throw new Error("Joke unavailable");
    return {
        joke: validated.value,
        type: "chuck",
        id: crypto.randomUUID()
    }
}



