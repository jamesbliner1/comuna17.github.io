var latitud_c17=3.385602;
      var longitud_c17=-76.529921;
      var latitud=latitud_c17;
      var longitud=longitud_c17;
      var zoom=13;

var map = L.map('map', {
    maxBounds: L.latLngBounds([3.3626, -76.5505], [3.43, -76.487]),
   
    maxBoundsViscosity: 0.8
  }).setView([latitud, longitud], zoom);



var mapa_base_1 = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
    minZoom: 11,
	maxZoom: 20
}).addTo(map);

var mapa_base_2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
    minZoom: 11,
	maxZoom: 20
});

// Agregar control de escala
L.control.scale().addTo(map);


