import { describe, expect, it } from "vitest";
import { getRandomJoke } from "../src/scripts/api-manager/joke-services";
import { getCurrentWeather } from "../src/scripts/api-manager/weather-services";


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