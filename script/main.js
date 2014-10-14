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
    initMarkers();
    carouselSlider();

    var currentZoom = map.getZoom();

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

    $(".lazyOwl").one("load", function() {
        var current = this.getAttribute('src');
        var finishedImage = 'http://epsilon.naphi.com/' + current;
        imageCache(finishedImage);
    })

    $(window).resize(function(){
        delay(deviceDetection(), 1000);
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

    var delay = (function(){
        var timer = 0;
            return function(callback, ms){
                clearTimeout (timer);
                timer = setTimeout(callback, ms);
            };
    })();

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

                            //+ Jonas Raoni Soares Silva
                            //@ http://jsfromhell.com/array/shuffle [v1.0]
                            function shuffle(o){ //v1.0
                                for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                                return o;
                            };

    function carouselSlider(){
        var shuffledImages = shuffle(galleryImages);

        for (var i=0; i<shuffledImages.length; i++){
            var markup = '<div class="item"><img class="lazyOwl" data-src="images/gallery_batch/' + 
                        shuffledImages[i]
                        + '" alt="Lazy Owl Image"></div>';

                $(markup).appendTo('#lazy-load');

        }

        $("#lazy-load").owlCarousel({
            items : 1,
            itemsDesktop : 1,
            itemsDesktopSmall : 1,
            itemsTablet : 1,
            itemsMobile : 1,
            lazyLoad : true,
            navigation : true,
            autoPlay: 3000
            ,autoHeight : true
        }); 

    }
// })();