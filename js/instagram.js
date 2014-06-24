function pullFeed() {
	var parms = {
		count: '9'
		,client_id: 'df70d4f39d3649a9b724876a0f2de343'
	}

	var end = "https://api.instagram.com/v1/users/276609664/media/recent/?client_id=df70d4f39d3649a9b724876a0f2de343";

https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code

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
					,tag = lead.tags
					,standardRes = lead.images.standard_resolution.url
					,caption = lead.caption.text;

					$("#instagram-feed").append("<div class='instagram-container col-sm-3'><img class='instagram-img' src='" + lowRes + "'/><p>" + caption + "</p></div>");

			}

		
		}
	});

}


	$(document).ready(function(){
		pullFeed();
	});
