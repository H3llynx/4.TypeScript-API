export let userLocation: { latitude?: number; longitude?: number } = {}

function getCurrentPositionAsync(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => {
                alert("Location access denied. Please enable it in your browser settings.");
                reject(error);
            }
        );
    });
}

export async function getLocationPermission() {
    try {
        const result = await navigator.permissions.query({ name: "geolocation" });
        if (result.state === "granted" || result.state === "prompt") {
            const position = await getCurrentPositionAsync();
            userLocation.latitude = position.coords.latitude;
            userLocation.longitude = position.coords.longitude;
        } else if (result.state === "denied") {
            alert("Location access denied. Please enable it in your browser settings.");
        }
    } catch (error) {
        console.log(error);
    }
}

const key = "82197ea57ff8317968053b853ef47bc3";
const options = { method: 'GET', headers: { Accept: 'application/json' } };

export async function getCurrentWeather() {
    const weatherURL = `https://api.weatherstack.com/current?access_key=${key}&query=${userLocation.latitude},${userLocation.longitude}`;
    try {
        const response = await fetch(weatherURL, options);
        const data = await response.json();
        return (
            {
                temperature: data.current.temperature,
                icon: data.current.weather_icons[0]
            }
        )
    } catch (error) {
        console.error(error);
    }
}