$( document ).ready(function() {
	$("#reset").click( function(){
		reset();
		return false;
	});

	$("#display-travelers").change( function(){
		if ( $(this).is( ':checked' ) ){
			window.game.displays.travelers = true;
		} else {
			window.game.displays.travelers = false;
		}
	});
});