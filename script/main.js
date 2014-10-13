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
    ,imageCacheArray = []
    ,deviceSize = window.innerWidth;

    console.log(deviceSize);
    if (deviceSize <= 480){
        map.setZoom(13);
    }

initMarkers();

//***********************************************
// EVENT HANDLERS *******************************
    

    $('body').on('click', '.chapter-navigation li', function(){
        
        var current = $(this).data('chapter');
            map.panTo(chapterInfo[current].geo);

    }).on('click', '.chapter-marker img',function(){
        
        $('#map-canvas').addClass('blur');
        $('.general-content, .fade-bg').slideToggle();

    }).on('click', '.fade-bg', function(){

        $('.general-content, .fade-bg').slideToggle();
        $('#map-canvas').removeClass('blur');

    }).on('click', '.general-content ul.navigation li', function(){

        var current = $(this).data('nav');
            $('.content-text').hide();
            $('.general-content ul.navigation li').removeClass('active');

            $('.general-content #' + current).show();
            $(this).addClass('active');

    });


//***********************************************
// FUNCTIONS ************************************

function createRichMarker(chapter){
    var cMarker = new RichMarker({
            position: chapterInfo[chapter].geo
            ,map: map
            ,content: chapterInfo[chapter].content
        });

    cMarker.setMap(map);
}

function initMarkers(){
    for (var i in chapterInfo){
        createRichMarker(i);
    }
}

    function imageCache(asset){
        var imageCacheObj = {};

            imageCacheObj.cache = new Image();
            imageCacheObj.cache.src = asset;

        imageCacheArray.push(imageCacheObj);
    }
// })();