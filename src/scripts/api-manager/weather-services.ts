export let userLocation: { latitude?: number; longitude?: number } = {}

function getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => {
                if (error.code === 1) {
                    alert("Location access denied. Please enable it in your browser settings.");
                }
                else if (error.code === 2) {
                    alert("Location currently unavailable. Please try again later.")
                }
                else alert("Unknown error");
                reject(error);
            }
        );
    });
}

export async function getLocationPermission() {
    try {
        const result = await navigator.permissions.query({ name: "geolocation" });
        if (result.state === "granted" || result.state === "prompt") {
            const position = await getCurrentPosition();
            userLocation.latitude = position.coords.latitude;
            userLocation.longitude = position.coords.longitude;
        } else if (result.state === "denied") {
            alert("Location access denied. Please enable it in your browser settings.");
        }
    } catch (error) {
        console.log(error);
    }
}

const key = "8262f0260647636979f12177667c2539";
const options = { method: 'GET', headers: { Accept: 'application/json' } };

export async function getCurrentWeather() {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${key}&units=metric`;
    try {
        const response = await fetch(weatherURL, options);
        const data = await response.json();
        return (
            {
                temperature: data.main.temp,
                icon: data.weather[0].icon
            }
        )
    } catch (error) {
        console.error(error);
    }
};