
// When WET is ready
$( document ).on( "wb-ready.wb", function( event ) {

	// Check language in HTML and set language variable
	var $language = $( "html" ).attr( "lang" );

	// Change in the contact link email. 
	// First link in .brand
	$(".brand ul li a").first().attr("href", "/contact-" + $language + ".html");

});

