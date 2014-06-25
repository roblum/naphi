function pullFeed() {
	var parms = {
		count: '9'
		,client_id: 'df70d4f39d3649a9b724876a0f2de343'
	}

	var end = "https://api.instagram.com/v1/users/276609664/media/recent/?client_id=df70d4f39d3649a9b724876a0f2de343";

	$.ajax({
		type: "GET"
		,url: end
		,dataType: "jsonp"
		,data: parms
		,success: function(res){
			console.log(res)
			var links = res.data;

			for(i=1;i<links.length;i++) {
				var lead = links[i]
					,lowRes = lead.images.low_resolution.url
					,standardRes = lead.images.standard_resolution.url
					,caption = lead.caption.text;

					$("#instagram-feed").append("<div class='instagram-container col-sm-3'><a href='#' class='popBoxLink' id='popBox" + i + "'><img class='instagram-img' src='" + lowRes + "'/><div class='hide-content'><p>" + caption + "</p><span>" + standardRes + "</span></div></a></div>");

			}

		
		}
	});

}


	$(document).ready(function(){
		pullFeed();
	});
