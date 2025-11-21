export let userLocation: { latitude?: number; longitude?: number } = {}

export async function getLocationPermission() {
    try {
        const result = await navigator.permissions.query({ name: "geolocation" });
        if (result.state === "granted" || result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, error);
        } else if (result.state === "denied") {
            alert("Location access denied. Please enable it in your browser settings.");
        }
    } catch (error) {
        console.log(error);
    }
}

function success(position: GeolocationPosition) {
    userLocation.latitude = position.coords.latitude;
    userLocation.longitude = position.coords.longitude;
}

function error(error: GeolocationPositionError) {
    console.warn(`Error code ${error.code}: ${error.message}`);
}

const key = "82197ea57ff8317968053b853ef47bc3";
const weatherURL = `https://api.weatherstack.com/current?access_key=${key}&query=41.45150863806029,2.1904798044244127`;

const options = { method: 'GET', headers: { Accept: 'application/json' } };

export async function getCurrentWeather() {
    await getLocationPermission();
    try {
        const response = await fetch(weatherURL, options);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

