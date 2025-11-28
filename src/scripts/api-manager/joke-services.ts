import type { Joke } from "../types/types";
import { ChuckSchema, DadSchema } from "../types/zod-validation";

export async function getRandomJoke(): Promise<Joke> {
    const random = Math.floor(Math.random() * 2);
    const URL = random === 0 ? "https://api.chucknorris.io/jokes/random" : "https://icanhazdadjoke.com/";

    try {
        const response = await fetch(URL, {
            method: "GET",
            headers: { "Accept": "application/json", "User-Agent": "Sofa army" }
        });

        const data = await response.json();

        let joke: string;
        if (random === 0) {
            const validated = ChuckSchema.parse(data);
            joke = validated.value;
        } else {
            const validated = DadSchema.parse(data);
            joke = validated.joke;
        }
        if (!joke) throw new Error("Invalid joke data");
        return { joke, type: random === 0 ? "chuck" : "dad" };

    } catch (error) {
        console.error('Fetch/validation error:', error);
        throw (error);
    }
}