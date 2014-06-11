var map;
	function initialize() {
  		var mapOptions = {
    	zoom: 15,
    	center: new google.maps.LatLng(40.694074, -73.986932)    
  	};
  	
  	map = new google.maps.Map(document.getElementById('google-maps'),
      	mapOptions);

  	var contentString = '<div>Epsilon Chapter - NYU Poly</div>';

  	var chapters = {
  		alpha : {

        },beta : {

        },gamma : {

        },delta : {

        },epsilon : {
        	icon : 'images/epsilon.png'
        	,geo : new google.maps.LatLng(40.694074, -73.986932)
        	,info : new google.maps.InfoWindow({content: contentString})
        },zeta : {

        },eta : {

        },theta : {

        },iota : {

        }
  	}

	//var epsilonInfo = ;


	var epsilonMarker = new google.maps.Marker({
	    position: chapters.epsilon.geo,
	    map: map,
	    icon: chapters.epsilon.icon
	});

	  	google.maps.event.addListener(epsilonMarker, 'click', function() {
	    	chapters.epsilon.info.open(map, epsilonMarker);
	  	});

}

$('#click-me').click(function(){
	map.setCenter(new google.maps.LatLng(42.088828,-75.966972));
  map.setZoom(15);
});


google.maps.event.addDomListener(window, 'load', initialize);