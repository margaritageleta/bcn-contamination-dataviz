
// JS and Leaflet stuff

var map = L.map('map', {
	center: [41.41, 2.15],
	zoom: 12,
	minZoom: 2,
	maxZoom: 18
})

L.tileLayer('https://api.mapbox.com/styles/v1/johntyler/cjz3zqyd80c601coi3kd9eecz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam9obnR5bGVyIiwiYSI6ImNqeXp6cHU1eTA2cDgza2xveTJjYnlwcTMifQ.yzPTE0XW24Y6jzTDY88geg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

// Location of markers

var markersants = L.marker([41.3788,2.1331]).addTo(map);
var circle1 = L.circle([41.3788,2.1331], {
    color: '#33cccc',
    fillColor: '#66e6cc',
    fillOpacity: 0.8,
    radius: 500
}).addTo(map);
//circle1.bindPopup("I am a circle.").openPopup();

var markereixample = L.marker([41.3853, 2.1538]).addTo(map);
var circle2 = L.circle([41.3853, 2.1538], {
    color: '#33cccc',
    fillColor: '#66e6cc',
    fillOpacity: 0.8,
    radius: 500
}).addTo(map);

var markergracia = L.marker([41.3987, 2.1534]).addTo(map);
var circle3 = L.circle([41.3987, 2.1534], {
    color: '#33cccc',
    fillColor: '#66e6cc',
    fillOpacity: 0.8,
    radius: 500
}).addTo(map);

var markerciutadella = L.marker([41.3864,2.1874]).addTo(map);
var circle4 = L.circle([41.3864,2.1874], {
    color: '#33cccc',
    fillColor: '#66e6cc',
    fillOpacity: 0.8,
    radius: 500
}).addTo(map);

var markervallhebron = L.marker([41.4261,2.1480 ]).addTo(map);
var circle5 = L.circle([41.4261,2.1480], {
    color: '#33cccc',
    fillColor: '#66e6cc',
    fillOpacity: 0.8,
    radius: 500
}).addTo(map);

var markerpalaureial = L.marker([41.3875,2.1151]).addTo(map);
var circle6 = L.circle([41.3875,2.1151], {
    color: '#33cccc',
    fillColor: '#66e6cc',
    fillOpacity: 0.8,
    radius: 500
}).addTo(map);

var markerpoblenou = L.marker([41.4039,2.2045]).addTo(map);
var circle7 = L.circle([41.4039,2.2045], {
    color: '#33cccc',
    fillColor: '#66e6cc',
    fillOpacity: 0.8,
    radius: 500
}).addTo(map);

var markerfabra = L.marker([41.4183,2.1239]).addTo(map);
var circle8 = L.circle([41.4183,2.1239], {
    color: '#33cccc',
    fillColor: '#66e6cc',
    fillOpacity: 0.8,
    radius: 500
}).addTo(map);

// Add some GeoJSON (Geometrical objects in JSON format)
function basement (feature, layer) { // this function for onEachFeaature needs 2 arguments
	// add popup (information window)
	// you can add paragraph <p> and image <img> and data from the geojson
  /*layer.bindPopup("<h1 class='info_header'>Welcome to BCN!</h1>" +
    "<p class='info_paragraph'> District: " +
    feature.properties.N_Distri + "</p>" +
    "<p class='info_paragraph'> Barri: " +
    feature.properties.N_Barri + "</p>");*/

	layer.bindPopup( "<p class='info_paragraph'><b> District: </b> " +
		feature.properties.N_Distri + "</p>" +
		"<p class='info_paragraph'> <b> Neighborhood: </b> " +
		feature.properties.N_Barri + "</p>");
};

function open_pops(feature, layer) {
  if (feature.properties.N_Barri == "Sants") {
    layer.bindPopup( "<p class='info_paragraph'><b> District: </b> " +
    feature.properties.N_Distri + "</p>" +
    "<p class='info_paragraph'> <b> Neighborhood: </b> " +
    feature.properties.N_Barri + "</p>");
  }
};


function highlight(prop) {
	console.log(prop);
	if(prop == "Eixample") return '#800026';
	if(prop == "Gràcia") return '#0000FF';
	if(prop == "Ciutat Vella") return '#00CC00';
	if(prop == "Sarrià-Sant Gervasi") return '#FFAB73';
	if(prop == "Les Corts") return '#CC00FF';
	if(prop == "Sant Martí") return '#FFFF00';
	if(prop == "Sants-Montjuïc") return '#663300';
	if(prop == "Horta-Guinardó") return '#111';
};
function style(feature) {
  return { 
    fillColor: highlight(feature.properties.N_Distri)
  };
};

// geojson to js
L.geoJson(barris, {
	// on each barri
	onEachFeature: basement, // dont end with semicolon! It wont work!
	// use comma if there are several lines, and dontt use anything if its the last.
	style: style

}).addTo(map);


$("#dataviz").click(function () {
    console.log("dataviz on");
    $("#about").removeClass("enabled");
    $("#stats2").removeClass("enabled");
	$("#about").addClass("disabled");
  $("#info").css('background-color', 'seagreen');
  $("#info").css('box-shadow', '0 9px darkgreen');

  $("#stats2").addClass("disabled");
  $("#dataviz2").css('background-color', 'seagreen');
  $("#dataviz2").css('box-shadow', '0 9px darkgreen');

	$("#stats").addClass("enabled");
  $(this).css('background-color', 'indianred');
  $(this).css('box-shadow', '0 9px brown');
 });

$("#info").click(function () {
    console.log("info on");
    $("#stats").removeClass("enabled");
    $("#stats2").removeClass("enabled");
	$("#stats").addClass("disabled");
  $("#dataviz").css('background-color', 'seagreen');
  $("#dataviz").css('box-shadow', '0 9px darkgreen');

  $("#stats2").addClass("disabled");
  $("#dataviz2").css('background-color', 'seagreen');
  $("#dataviz2").css('box-shadow', '0 9px darkgreen');

	$("#about").addClass("enabled");
  $(this).css('background-color', 'indianred');
  $(this).css('box-shadow', '0 9px brown');

 });

$("#dataviz2").click(function () {
    console.log("info on");
    $("#stats").removeClass("enabled");
    $("#about").removeClass("enabled");
  $("#stats").addClass("disabled");
  $("#dataviz").css('background-color', 'seagreen');
  $("#dataviz").css('box-shadow', '0 9px darkgreen');

  $("#about").addClass("disabled");
  $("#info").css('background-color', 'seagreen');
  $("#info").css('box-shadow', '0 9px darkgreen');

  $("#stats2").addClass("enabled");
  $(this).css('background-color', 'indianred');
  $(this).css('box-shadow', '0 9px brown');

 });

//////


var sheet = document.createElement('style'),  
  $rangeInput = $('.range input'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {  
  var curVal = el.value,
      val = (curVal - 1) * 16.666666667,
      style = '';
  
  // Set active label
  $('.range-labels li').removeClass('active selected');
  
  var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
  
  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');
  
  // Change background gradient
  //for (var i = 0; i < prefs.length; i++) {
  //  style += '.range {background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #fff ' + val + '%, #fff 100%)}';
  //  style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  //}

  return style;
}
$(document).ready(function(){
$rangeInput.on('input', function () {
  sheet.textContent = getTrackStyle(this);

  console.log($(this).val());

  if($(this).val() == 1) {
  	// Jun 2018
  	$(".meanclass").remove();
	$("#iframe-holder").append("<iframe id=\"meandec\" src=\"widgets/meanjun.html\" height=\"600\" width=\"100%\" scrolling=\"no\" seamless=\"seamless\" frameBorder=\"0\" class=\"meanclass\"></iframe>");
 
  }
  else if($(this).val() == 2) {
  	// Jul 2018
  	$(".meanclass").remove();
	$("#iframe-holder").append("<iframe id=\"meandec\" src=\"widgets/meanjul.html\" height=\"600\" width=\"100%\" scrolling=\"no\" seamless=\"seamless\" frameBorder=\"0\" class=\"meanclass\"></iframe>");
 
  }
  else if($(this).val() == 3) {
  	// Aug 2018
  	$(".meanclass").remove();
	$("#iframe-holder").append("<iframe id=\"meandec\" src=\"widgets/meanaug.html\" height=\"600\" width=\"100%\" scrolling=\"no\" seamless=\"seamless\" frameBorder=\"0\" class=\"meanclass\"></iframe>");
 
  }
  else if($(this).val() == 4) {
  	// Sep 2018
  	$(".meanclass").remove();
	$("#iframe-holder").append("<iframe id=\"meandec\" src=\"widgets/meansep.html\" height=\"600\" width=\"100%\" scrolling=\"no\" seamless=\"seamless\" frameBorder=\"0\" class=\"meanclass\"></iframe>");
 
  }
  else if($(this).val() == 5) {
  	// Oct 2018
  	$(".meanclass").remove();
	$("#iframe-holder").append("<iframe id=\"meandec\" src=\"widgets/meanoct.html\" height=\"600\" width=\"100%\" scrolling=\"no\" seamless=\"seamless\" frameBorder=\"0\" class=\"meanclass\"></iframe>");
 
  }
  else if($(this).val() == 6) {
  	// Nov 2018
  	$(".meanclass").remove();
	$("#iframe-holder").append("<iframe id=\"meandec\" src=\"widgets/meannov.html\" height=\"600\" width=\"100%\" scrolling=\"no\" seamless=\"seamless\" frameBorder=\"0\" class=\"meanclass\"></iframe>");
  }
  else if($(this).val() == 7) {
  	// Dec 2018
  	console.log("dec 2018");
  	$(".meanclass").remove();
	$("#iframe-holder").append("<iframe id=\"meandec\" src=\"widgets/meandec.html\" height=\"600\" width=\"100%\" scrolling=\"no\" seamless=\"seamless\" frameBorder=\"0\" class=\"meanclass\"></iframe>");
  }
  else if($(this).val() == 8) {
  	// Jan 2019
  	console.log("jan 2019");
  	$(".meanclass").remove();
	$("#iframe-holder").append("<iframe id=\"meanjan\" src=\"widgets/meanjan.html\" height=\"600\" width=\"100%\" scrolling=\"no\" seamless=\"seamless\" frameBorder=\"0\" class=\"meanclass\"></iframe>");
  }
  else if($(this).val() == 9) {
    // Jan 2019
    console.log("apr 2019");
    $(".meanclass").remove();
  $("#iframe-holder").append("<iframe id=\"meanapr19\" src=\"widgets/meanapr19.html\" height=\"500\" width=\"100%\" scrolling=\"no\" seamless=\"seamless\" frameBorder=\"0\" class=\"meanclass\"></iframe>");
  }
  else if($(this).val() == 10) {
    // Jan 2019
    console.log("jun 2019");
    $(".meanclass").remove();
  $("#iframe-holder").append("<iframe id=\"meanjun19\" src=\"widgets/meanjun19.html\" height=\"500\" width=\"100%\" scrolling=\"no\" seamless=\"seamless\" frameBorder=\"0\" class=\"meanclass\"></iframe>");
  }
});
});

// Change input value on label click
$('.range-labels li').on('click', function () {
  var index = $(this).index();
  print(index);
  $rangeInput.val(index + 1).trigger('input');
  
});
/////


