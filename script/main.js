//(function(){
var myLatlng = new google.maps.LatLng(40.71043855741909, -74.00503814701665)
    ,mapOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeControl: false,
        styles: googleMapStyles
    }
    ,map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions)
    ,currentZoom = map.getZoom()
    ,imageCacheArray = [];

createRichMarker('epsilon');

$('body').on('click', '.chapter-navigation li', function(){
    var current = $(this).data('chapter');
    
    createRichMarker(current);
    map.panTo(chapterInfo[current].geo);
});

function createRichMarker(chapter){
    var cMarker = new RichMarker({
            position: chapterInfo[chapter].geo
            ,map: map
            ,content: '<div>Testing</div>'
        });

    cMarker.setMap(map);
}

    function imageCache(asset){
        var imageCacheObj = {};

            imageCacheObj.cache = new Image();
            imageCacheObj.cache.src = asset;

        imageCacheArray.push(imageCacheObj);
    }
// })();