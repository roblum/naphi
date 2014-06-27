function pullFeed() {
	var parms = {
		count: '8'
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
				
				//Create arrays for image caching
				preloadImagesList = [];
				var imageURLs = [];

			for(i=0;i<links.length;i++) {
				var lead = links[i]
					,lowRes = lead.images.low_resolution.url
					,standardRes = lead.images.standard_resolution.url
					,caption = lead.caption.text;

						//Create new images from instagram feed and push to array
						imageURLs.push(standardRes);

						var img = new Image();
					        img.src = imageURLs[i];
					        preloadImagesList.push(img);


					$("#instagram-feed").append("<div class='instagram-container col-sm-3'><a href='#' class='popBoxLink' id='popBox" + i + "'><img class='instagram-img' src='" + lowRes + "'/><div class='hide-content'><p>" + caption + "</p></div></a></div>");

			}

		
		}
	});

}


	$(document).ready(function(){
		pullFeed();
	});
