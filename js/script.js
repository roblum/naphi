jQuery(function($){
	
	//=========================================================
	//Light Box Script
	function boxFadeIn(id){
		var marginTop = ($('#light-box img')[0].naturalHeight + 10) / 2
			,marginLeft = ($('#light-box img')[0].naturalWidth + 10) / 2;
			console.log($('#light-box img'))
		$('#light-box').css({
			'margin-top': -marginTop
			,'margin-left': -marginLeft
		})

		$('#light-box img').attr('id', 'large-' + id);
		$('#light-box, #fade-background').fadeIn();

	}

	//Open Light Box when image clicked
	$('body').on('click', '.instagram-img', function(e){
		var standardLink = $(this).next().find('span').html()
			,current = $(this).closest('a').attr('id');

		$('#light-box img').attr('src',standardLink);

		boxFadeIn(current);
		return false;
	});

	//Close Light Box when Fade Background clicked
	$('#fade-background').click(function(){
		$('#fade-background, #light-box').fadeOut();
	});

	//Next and Previous Functionality
	$('.light-box-trigger').click(function(){
		var current = this.id
			,findImg = $(this).siblings('.light-box-img')
			,imgNumber = findImg.attr('id').match(/\d+/);

			console.log(findImg + ' ' + imgNumber)

		console.log(current)
		if (current === 'next'){
			var next = parseInt(imgNumber) + 1;
			var nextSrc = $('#popBox' + next + ' .hide-content span').html();
			console.log(next)
			$('#light-box img').attr({'src': nextSrc, 'id': 'large-popBox' + next});
		} else if (current === 'prev'){
			var prev = parseInt(imgNumber) - 1;
			var prevSrc = $('#popBox' + prev + ' .hide-content span').html();
			$('#light-box img').attr({'src': prevSrc, 'id': 'large-popBox' + prev});
		}

	});
});

