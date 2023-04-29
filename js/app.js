var map = L.map('map', { gestureHandling: true }).setView([51.505, -0.09], 13);

L.tileLayer.provider('Stadia.OSMBright').addTo(map);
var marker = L.marker([-0.20569, -78.4822]).addTo(map);

var latLngs = [marker.getLatLng()];
var markerBounds = L.latLngBounds(latLngs);

map.fitBounds(markerBounds);
