import { beforeEach, describe, expect, it, vi } from "vitest";
import { getChuckJoke, getDadJoke } from "../src/scripts/jokes/joke-services";
import { ChuckSchema, DadSchema, WeatherSchema } from "../src/scripts/types/zod-validation";
import { getCurrentWeather, getLocationPermission, userLocation } from "../src/scripts/weather/weather-services";

describe('API Schemas validation', () => {
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
        const correctResult = WeatherSchema.safeParse({
            main: { temp: 0 },
            weather: [{ icon: "0dh", description: "cloudy" }]
        });
        expect(correctResult.success).toBe(true);
        // const wrongResult = WeatherSchema.safeParse({
        //     main: { temp: "8" },
        //     weather: [{ icon: 123, description: "cloudy" }]
        // });
        // expect(wrongResult.success).toBe(false);
    });
});

describe("getDadJoke Test", () => {
    it("should be declared", () => {
        expect(typeof getDadJoke).toBe("function");
    });
    it("should return a joke object", async () => {
        let result = await getDadJoke();
        expect(typeof result).toBe("object");
        expect(result).toHaveProperty("joke");
        expect(result).toHaveProperty("id");
        expect(result).toHaveProperty("type");
    });
});

describe("getChuckJoke Test", () => {
    it("should be declared", () => {
        expect(typeof getChuckJoke).toBe("function");
    });
    it("should return a joke object", async () => {
        let result = await getChuckJoke();
        expect(typeof result).toBe("object");
        expect(result).toHaveProperty("joke");
        expect(result).toHaveProperty("id");
        expect(result).toHaveProperty("type");
    });
});

describe("getCurrentWeather Test", () => {
    it("should be declared", () => {
        expect(typeof getCurrentWeather).toBe("function");
    });
    it("should return a weather object", async () => {
        let lat = 20;
        let lon = 40;
        let result = await getCurrentWeather(lat, lon);
        expect(typeof result).toBe("object");
        expect(result).toHaveProperty("temperature");
        expect(result).toHaveProperty("icon");
        expect(result).toHaveProperty("description");
    });

});

describe("getLocationPermission", () => {
    const mockGeolocation = {
        getCurrentPosition: vi.fn()
    };

    const mockPermissions = {
        query: vi.fn()
    };

    Object.defineProperty(globalThis, "navigator", {
        value: {
            geolocation: mockGeolocation,
            permissions: mockPermissions
        },
        writable: true
    });

    beforeEach(() => {
        vi.clearAllMocks();
        mockPermissions.query.mockReset();
        mockGeolocation.getCurrentPosition.mockReset();
        userLocation.latitude = undefined;
        userLocation.longitude = undefined;
    });

    it("updates location when permission granted", async () => {
        mockPermissions.query.mockResolvedValue({ state: "granted" });
        mockGeolocation.getCurrentPosition.mockImplementation((success) => {
            success({ coords: { latitude: 51.5, longitude: -0.1 } });
        });
        await getLocationPermission();
        expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
        expect(userLocation.latitude).toBe(51.5);
        expect(userLocation.longitude).toBe(-0.1);
    });

    it("skips when permission denied", async () => {
        mockPermissions.query.mockResolvedValue({ state: "denied" });
        await getLocationPermission();
        expect(mockGeolocation.getCurrentPosition).not.toHaveBeenCalled();
    });
});