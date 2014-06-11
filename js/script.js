var map;
	function initialize() {
  		var mapOptions = {
    	zoom: 15,
    	center: new google.maps.LatLng(40.694074, -73.986932)    
  	};
  	
  	map = new google.maps.Map(document.getElementById('google-maps'),
      	mapOptions);

  	var contentString = '<div>Epsilon Chapter - NYU Poly</div>';

	var epsilonInfo = new google.maps.InfoWindow({
    	content: contentString
  	});

	var epsilonIcon = 'images/epsilon.png';
	var epsilonGeo = new google.maps.LatLng(40.694074, -73.986932);
	var epsilonMarker = new google.maps.Marker({
	    position: epsilonGeo,
	    map: map,
	    icon: epsilonIcon
	});

	  	google.maps.event.addListener(epsilonMarker, 'click', function() {
	    	epsilonInfo.open(map, epsilonMarker);
	  	});

}

$('#click-me').click(function(){
	var weatherLayer = new google.maps.weather.WeatherLayer({
	    temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
	});
	  	weatherLayer.setMap(map);

	var cloudLayer = new google.maps.weather.CloudLayer();
	cloudLayer.setMap(map);
});


google.maps.event.addDomListener(window, 'load', initialize);