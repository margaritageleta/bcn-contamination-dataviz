
// JS and Leaflet stuff

var map = L.map('map', {
	center: [41.383333, 2.183333],
	zoom: 13,
	minZoom: 2,
	maxZoom: 18
})

//var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoiam9obnR5bGVyIiwiYSI6ImNqeXp6cHU1eTA2cDgza2xveTJjYnlwcTMifQ.yzPTE0XW24Y6jzTDY88geg'
}).addTo(map);

// Add some GeoJSON (Geometrical objects in JSON format)
function basement (feature, layer) { // this function for onEachFeaature needs 2 arguments
	// add popup (information window)
	// you can add paragraph <p> and image <img> and data from the geojson
	layer.bindPopup("<h1 class='info_header'>Welcome to BCN!</h1>" +
		"<p class='info_paragraph'> District: " +
		feature.properties.N_Distri + "</p>" +
		"<p class='info_paragraph'> Barri: " +
		feature.properties.N_Barri + "</p>");
};

// geojson to js
L.geoJson(barris, {
	// on each barri
	onEachFeature: basement // dont end with semicolon! It wont work!
	// use comma if there are several lines, and dontt use anything if its the last.

}).addTo(map);




