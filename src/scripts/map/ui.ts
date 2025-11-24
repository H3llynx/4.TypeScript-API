import * as L from 'leaflet';
import { userLocation } from '../api-manager/weather-services';

export async function showMap() {
    if (userLocation.latitude && userLocation.longitude) {
        const map = L.map("map").setView([userLocation.latitude, userLocation.longitude], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }
}