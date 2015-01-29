 $(document).ready(function() {

 	$("#main").on("submit", function (e) {

 		e.preventDefault();

 		var movieInput = $("#movie").val();
 		console.log(movieInput);
 		movieInfo(movieInput);




 	});

 	$("#main").val("");

 });



	function movieInfo(movie){

	$.getJSON( "http://www.omdbapi.com/?s=" + movie, function(data) {
		console.log(data.Search);

		// A FOR LOOP THAT LOOPS THROUGH data.Search
		//Inside the forloop you want to append into "ul" data.Search[i].title

	console.log(data);


	if (data.Response === "False") {
		alert("THAT MOVIE DOESN'T EXIST!");
		
	}
	

	for (var i = 0; i < data.Search.length; i++) {

		$("ul").append($("<li>" + data.Search[i].Title + "</li>"));
	}	



	});



}




/*

When the list of matching movies is returned, render the movie titles to the screen.
Use jQuery to construct new DOM elements for the titles and add them to the page.
A good strategy might be to have a container (e.g., a <div> or <ul> in your HTML file that will hold the search results.
You may want to clear any old results before rendering new ones.
If your search response does not return any results, make sure to let the user know that nothing was found!
Need a search term? Why not 'zealoushacker'

*/







 // function movieInfo (movie) {

 // 	$.ajax({
 // 		url: "http://www.omdbapi.com/?s="+movie
 // 		})
 // 		.done(function (data) {

	// 		var x = JSON.parse(data);
	// 		console.log(x);

	// 		// var img = $("<img>").attr("src", data.avatar_url);
	// 		// $("body").append(img);

	// 	}) 
	// 	// data: {access_token: "8b2976b1a56aa6879ea52037250aea5af73cee11"},
	// 	// success: function (data) {

	// 	// 	var x = JSON.parse(data);
	// 	// 	console.log(x);

	// 		// var img = $("<img>").attr("src", data.avatar_url);
	// 		// $("body").append(img);

	// 	}
	// });
 // }