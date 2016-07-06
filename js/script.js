$(document).ready(function() {
	$("a").click(function(event) {
			event.preventDefault();
		});


//Attaching a Click Event to the .readmore class
//Anonymous function
	$(".readmore").click(function(){
		$(".readmore").hide();
		$(".readless").show();
		//Note ID
		$("#show-this-on-click").slideDown(250);
	});

	$(".readless").click(function(){
		$(".readless").hide();
		$(".readmore").show();
		$("#show-this-on-click").slideUp(250);
	});

	$(".learnmore").click(function(){
		$(".learnmore").hide();
		$("#learnmoretext").slideDown(1000);
	});

});