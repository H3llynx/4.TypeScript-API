import { describe, expect, it } from "vitest";
import { getRandomJoke } from "../src/scripts/api-manager/joke-services";
import { getCurrentWeather } from "../src/scripts/api-manager/weather-services";
import { ChuckSchema, DadSchema, WeatherSchema } from "../src/scripts/types/types";

describe('API Schemas', () => {
    it("Validates correct Chuck Norris joke type", () => {
        const result = ChuckSchema.safeParse({ value: "Chuck test" });
        expect(result.success).toBe(true);
        expect(result.data).toEqual({ value: "Chuck test" });
    });

    it("rejects invalid Chuck joke type", () => {
        const result = ChuckSchema.safeParse({ joke: "wrong" });
        expect(result.success).toBe(false);
    });

    it("Validates correct Dad joke type", () => {
        const result = DadSchema.safeParse({ joke: "Dad test" });
        expect(result.success).toBe(true);
    });
    it("Validates correct Weather data types", () => {
        const result = WeatherSchema.safeParse({
            main: { temp: 0 },
            weather: [{ icon: "0dh" }]
        });
        expect(result.success).toBe(true);
    });
});

describe("getRandomJoke Test", () => {
    it("should be declared", () => {
        expect(typeof getRandomJoke).toBe("function");
    });
    it("should return a joke object", () => {
        expect(typeof getRandomJoke()).toBe("object");
    });
})

describe("getCurrentWeather Test", () => {
    it("should be declared", () => {
        expect(typeof getCurrentWeather).toBe("function");
    });
    it("should return a weather", () => {
        expect(typeof getCurrentWeather()).toBe("object");
    });
});