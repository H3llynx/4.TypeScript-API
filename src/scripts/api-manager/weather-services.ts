export let userLocation :{latitude?: number; longitude?: number} = {}

export async function getLocationPermission() {
  try {
    const result = await navigator.permissions.query({ name: 'geolocation' });
    if (result.state === 'granted') {
      navigator.geolocation.getCurrentPosition(success, error);
    } else if (result.state === 'prompt') {
      navigator.geolocation.getCurrentPosition(success, error);
    } else if (result.state === 'denied') {
      alert('Location access denied. Please enable it in your browser settings.');
    }
  } catch (error) {
    console.log(error);
  }
}

function success(position: GeolocationPosition) {
    userLocation.latitude = position.coords.latitude;
    userLocation.longitude = position.coords.longitude;
    console.log(userLocation);
}

function error(error: GeolocationPositionError) {
  console.warn(`Error code ${error.code}: ${error.message}`);
}