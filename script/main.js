//(function(){
var myLatlng = new google.maps.LatLng(40.71043855741909, -74.00503814701665),
    mapOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeControl: false,
        styles: googleMapStyles
      },
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions),
    currentZoom = map.getZoom();

// })();