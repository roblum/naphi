var map
,chapters;

	function initialize() {
  		var mapOptions = {
    	zoom: 15,
    	center: new google.maps.LatLng(40.694074, -73.986932)    
  	};
  	
  	map = new google.maps.Map(document.getElementById('google-maps'),
      	mapOptions);

     var contentString;

  	chapters = {
  		alpha : {
               icon : 'images/alpha.png'
               ,geo : new google.maps.LatLng(42.6850794,-73.826036)
               ,info : new google.maps.InfoWindow({
                    content: contentString
               })
          },beta : {
               icon : 'images/beta.png'
               ,geo : new google.maps.LatLng(40.739995,-73.983642)
               ,info : new google.maps.InfoWindow({
                    content: contentString
               })
          },gamma : {
               icon : 'images/gamma.png'
               ,geo : new google.maps.LatLng(40.913096,-73.123586)
               ,info : new google.maps.InfoWindow({
                    content: contentString
               })
          },delta : {
               icon : 'images/delta.png'
               ,geo : new google.maps.LatLng(43.000809,-78.78897)
               ,info : new google.maps.InfoWindow({
                    content: contentString
               })
          },epsilon : {
             	icon : 'images/epsilon.png'
             	,geo : new google.maps.LatLng(40.694074, -73.986932)
             	,info : new google.maps.InfoWindow({
                    content: '<div>Epsilon Chapter - NYU Poly</div>'
               })
          },zeta : {
               icon : 'images/zeta.png'
               ,geo : new google.maps.LatLng(42.088828,-75.966972)
               ,info : new google.maps.InfoWindow({
                    content: contentString
               })
          },eta : {
               icon : 'images/eta.png'
               ,geo : new google.maps.LatLng(43.0383461,-76.134901)
               ,info : new google.maps.InfoWindow({
                    content: contentString
               })
          },theta : {
               icon : 'images/theta.png'
               ,geo : new google.maps.LatLng(40.744323,-74.025868)
               ,info : new google.maps.InfoWindow({
                    content: contentString
               })
          },iota : {
               icon : 'images/iota.png'
               ,geo : new google.maps.LatLng(40.4846831,-74.4366424)
               ,info : new google.maps.InfoWindow({
                    content: contentString
               })
        }
  	}

	var epsilonMarker = new google.maps.Marker({
	    position: chapters.epsilon.geo,
	    map: map,
	    icon: chapters.epsilon.icon
	});

	  	google.maps.event.addListener(epsilonMarker, 'click', function() {
	    	    chapters.epsilon.info.open(map, epsilonMarker);
	  	});

}

$('.map-trigger').click(function(){
     var current = this.id
          ,currentSchool = current.slice(4, current.length);

	map.setCenter(chapters[currentSchool].geo);
     map.setZoom(15);
});


google.maps.event.addDomListener(window, 'load', initialize);