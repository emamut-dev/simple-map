var map = L.map('map', { scrollWheelZoom: false }).setView(
  [-0.20569, -78.4822],
  16
);

map.on('click', function () {
  if (map.scrollWheelZoom.enabled()) {
    map.scrollWheelZoom.disable();
  } else {
    map.scrollWheelZoom.enable();
  }
});

L.tileLayer.provider('Stadia.OSMBright').addTo(map);

var marker = L.marker([-0.20569, -78.4822]).addTo(map);
