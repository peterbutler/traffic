$( document ).ready(function() {
	// Set up display toggles
	for( var item_name in window.game.displays ) {
		checked = '';
		if ( window.game.displays[ item_name ] ){
			checked = 'checked';
		}
		$checkbox = $('<li><input type="checkbox" id="display-' + item_name + '" ' + checked + '/><label for="display-' + item_name + '">' + item_name + '</label></li>');
		$("#displays ul").append( $checkbox );
	}
	$("#traveler-count").val( window.game.traveler_count );
	$("#places-count").val( window.game.place_count );
	if ( window.game.single_goal ){
		$("#single-goal").prop('checked', true);
	}


	$("#reset").click( function(){
		reset();
		return false;
	});




	$("#displays input").change( function(){
		item_name = $(this).attr('id').split('-')[1];
		if ( $(this).is( ':checked' ) ){
			window.game.displays[item_name] = true;
		} else {
			window.game.displays[item_name] = false;
		}
	});

	$("#traveler-count").change( function(){
		window.game.traveler_count = $(this).val();
	})
	$("#places-count").change( function(){
		window.game.place_count = $(this).val();
	})
	$("#single-goal").change( function(){
		if ( $(this).is( ':checked' ) ){
			window.game.single_goal = true;
		} else {
			window.game.single_goal = false;
		}
	})
});




