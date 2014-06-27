jQuery(function($){
	console.log('script.js ran')
	$('body').on('click', '.instagram-img', function(e){
		var standardLink = $(this).next().find('span').html();
		console.log(standardLink);
		return false;
	});
});

// <div class='instagram-container col-sm-3'>
// 	<a href='#' class='popBoxLink' id='popBox" + i + "'>
// 		<img class='instagram-img' src='" + lowRes + "'/>

// 		<div class='hide-content'>
// 			<p>" + caption + "</p>
// 			<span>" + standardRes + "</span>
// 		</div>
// 	</a>
// </div>