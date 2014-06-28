jQuery(function($){
	
	//=========================================================
	//Light Box Script
	function boxFadeIn(id){
		var marginTop = ($('#light-box img')[0].naturalHeight + 10) / 2
			,marginLeft = ($('#light-box img')[0].naturalWidth + 10) / 2;

			$('#light-box').css({
				'margin-top': -marginTop
				,'margin-left': -marginLeft
			})

		$('#light-box img').attr('id', 'large-' + id); //give large modal img a unique id
		$('#light-box, #fade-background').fadeIn();

	}

	//Open Light Box when image clicked
	$('body').on('click', '.instagram-img', function(e){
		//var standardLink = $(this).next().find('span').html()
		var current = $(this).closest('a').attr('id').match(/\d+/);
		console.log('current: ' + current);

		//preloadImagesList array pulled from instagram.script.js
		$('#light-box img').attr('src', preloadImagesList[current].src ); 

		boxFadeIn(current);
		return false;
	});

			//Next and Previous Functionality
			$('.light-box-trigger').click(function(){
				var current = this.id
					,findImg = $(this).siblings('.light-box-img')
					,imgNumber = findImg.attr('id').match(/\d+/);

					console.log(findImg + ' ' + imgNumber)

				console.log(current)
				if (current === 'next'){
					var next = parseInt(imgNumber) + 1
						,nextSrc = preloadImagesList[next].src;

					$('#light-box img').attr({'src': nextSrc, 'id': 'large-' + next});

				} else if (current === 'prev'){
					
					var prev = parseInt(imgNumber) - 1
						,prevSrc = preloadImagesList[prev].src;
					
					$('#light-box img').attr({'src': prevSrc, 'id': 'large-' + prev});

				}

			});

	//Close Light Box when Fade Background clicked
	$('#fade-background').click(function(){
		$('#fade-background, #light-box').fadeOut();
	});

});

