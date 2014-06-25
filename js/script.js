$(function($){
	$('.popBoxLink').click(function(e){
		var standardLink = $(this).find('span').html();
		console.log(standardLink);
		alert('hello')
	});
});