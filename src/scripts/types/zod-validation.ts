import { z } from "zod";

export const ChuckSchema = z.object({ value: z.string() });
export const DadSchema = z.object({ joke: z.string() });
export const WeatherSchema = z.object({
    main: z.object({
        temp: z.number()
    }),
    weather: z.array(
        z.object({
            icon: z.string()
        })
    )
});