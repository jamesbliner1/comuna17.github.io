var style_barrios = {
    radius: 5, // Tamaño del punto (ajusta según tus preferencias)
    fillColor: 'blue', // Color de relleno del punto
    color: '#600000', // Color del borde del punto
    weight: 0.3, // Grosor del borde del punto
    opacity: 1, // Opacidad del punto
    fillOpacity: 0.6 // Opacidad del relleno del punto
};

var layer_barrios = L.geoJson(barrios, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, style_barrios)
    }
});

var icono = L.icon({
    iconUrl: 'data/market.png', // Ruta a tu imagen PNG
    iconSize: [20, 20], // Tamaño del icono
});

var layer_barrios_icono = L.geoJson(barrios, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: icono })
    }
});

// Convierte la capa GeoJSON en una capa de calor
var heatLayer = L.heatLayer(layer_barrios.toGeoJSON().features.map(function(feature) {
    return feature.geometry.coordinates.reverse(); // Invertimos las coordenadas
}), {
    radius: 40, // Tamaño del radio del calor
    blur: 15, // Intensidad del efecto de difuminado
    maxZoom: 17 // Nivel de zoom máximo en el que se mostrará el calor
});