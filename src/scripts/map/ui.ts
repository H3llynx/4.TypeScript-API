import * as L from "leaflet";
import Marker from "../../assets/images/marker.png";
import { userLocation } from "../weather/weather-services";

export async function showMap() {
    if (userLocation.latitude && userLocation.longitude) {
        let coordinates: [number, number] = [userLocation.latitude, userLocation.longitude];
        const map = L.map("map").setView(coordinates, 13);
        L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
            maxZoom: 19,
            attribution: "Tiles © Esri"
        }).addTo(map);
        var customMarker = L.icon({
            iconUrl: Marker,
            iconSize: [38, 38],
            popupAnchor: [-3, -76]
        });
        const marker = L.marker(coordinates, { icon: customMarker }).addTo(map);
        marker.addEventListener("click", () => {
            const popup = L.popup()
                .setLatLng(coordinates)
                .setContent("You are here!")
            popup.openOn(map);
        })
    }
}