//(function(){
var myLatlng = new google.maps.LatLng(40.71043855741909, -74.00503814701665)
    ,mapOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeControl: false,
        styles: googleMapStyles
    }
    ,mapCanvas = document.getElementById('map-canvas')
    ,map = new google.maps.Map(mapCanvas, mapOptions)
    ,imageCacheArray = [];

    deviceDetection();
    var currentZoom = map.getZoom();

initMarkers();
slickSlider();

//***********************************************
// EVENT HANDLERS *******************************


    $('body').on('click', '.chapter-navigation li', function(){

        var current = $(this).data('chapter');
            map.panTo(chapterInfo[current].selection);

    }).on('click', '.chapter-marker img',function(){

        $(mapCanvas).addClass('blur');
        $('.general-content, .fade-bg').slideToggle();

    }).on('click', '.fade-bg', function(){

        $('.general-content, .fade-bg').slideToggle();
        $(mapCanvas).removeClass('blur');

    }).on('click', '.general-content ul.navigation li', function(){

        var current = $(this).data('nav');
            $('.content-text').hide();
            $('.general-content ul.navigation li').removeClass('active');

            $('.general-content #' + current).show();
            $(this).addClass('active');

    }).on('click', '.home', function(){

        map.setZoom(currentZoom);
        map.panTo(myLatlng);

    }).on('click', '#chapters li', function(){

        $(mapCanvas).removeClass('blur');

    }).on('click', '.mobile-render', function(){
        var current = $(this).data('chapter');

        $('.general-content, .fade-bg').slideToggle();
        $(mapCanvas).removeClass('blur');
        map.panTo(chapterInfo[current].geo);

    });

    $(window).resize(function(){
        deviceDetection();
    });


google.maps.event.addListener(map, 'center_changed', function() {
    $('.home').show();
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

    function deviceDetection(){
        var deviceWidth = window.innerWidth
            ,deviceHeight = window.innerHeight;

            console.log(deviceWidth);
            console.log(deviceHeight);
        if (deviceWidth <= 480){
            $('#chapters li').addClass('mobile-render');
            map.setZoom(13);
        } else if (deviceWidth <= 650 && deviceHeight <= 400){
            $('#chapters li').addClass('mobile-render');
            map.setZoom(13);
        } else if (deviceWidth > 768){
            $('#chapters li').removeClass('mobile-render');
        }
    }

    function slickSlider(){
        console.log('ran')
        $('.autoplay').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
    }
// })();