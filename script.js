var map = L.map('map').setView([37.7, -122.4], 10);

// load a tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var ratIcon = L.icon({
  iconUrl: 'http://maptimeboston.github.io/leaflet-intro/rat.gif',
  iconSize: [50, 40]
});

// load GeoJSON from an external file
$.getJSON("https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson", function(data) {
  // add GeoJSON layer to the map once the file is loaded
  L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: ratIcon });
    }
  }).addTo(map);
});