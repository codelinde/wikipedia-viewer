$(document).ready(function() {
	$("#userText").keyup(function(e) {
		var userSearch = $("#userText").val();
		$.getJSON("https://en.wikipedia.org/w/api.php?callback=?", {
				srsearch: userSearch,
				action: "query",
				list: "search",
				format: "json"
			},
			function(data) {
				$("#searchResults").empty();

				$.each(data.query.search, function(i, item) {
					$("#searchResults").append("<div class='bs-callout'><h4><a href='https://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "' target='blank'>" + item.title + "</a></h4>" + item.snippet + "...</div>");
				});
			});
	});
});