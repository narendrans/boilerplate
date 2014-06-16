/* Load the about.html when about menu item is clicked */
$('#aboutbutton').click(function(e) {
	e.preventDefault();
	$('#aboutModal').load('about.html');
	$('#aboutModal').modal();
});
/* Load the help.html when help menu item is clicked */
$('#helpbutton').click(function(e) {
	e.preventDefault();
	$('#helpModal').load('help.html');
	$('#helpModal').modal();
});

/* Load the content after document ready */
$(function() {
	$('#content').fadeIn('slow');
});
