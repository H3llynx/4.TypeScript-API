import type { Weather } from "../types/types";
import { WeatherSchema } from "../types/zod-validation";

export let userLocation: { latitude?: number; longitude?: number } = {}

function getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(error)
        )
    });
};

export async function getLocationPermission() {
    try {
        const result = await navigator.permissions.query({ name: "geolocation" });
        if (result.state === "granted" || result.state === "prompt") {
            const position = await getCurrentPosition();
            userLocation.latitude = position.coords.latitude;
            userLocation.longitude = position.coords.longitude;
        } else return;
    } catch (error) {
        console.log(error);
    }
}

const key = "8262f0260647636979f12177667c2539";
const options = { method: 'GET', headers: { Accept: 'application/json' } };

export async function getCurrentWeather(): Promise<Weather> {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${key}&units=metric`;
    try {
        const response = await fetch(weatherURL, options);
        const data = await response.json();
        const validated = WeatherSchema.parse(data);
        if (!data) throw new Error("Weather information unavailable");
        return {
            temperature: validated.main.temp,
            icon: validated.weather[0].icon
        };
    } catch (error) {
        console.error(error);
        throw (error);
    }
};