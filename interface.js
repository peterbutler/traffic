$( document ).ready(function() {
	// Set up display toggles
	for( var item_name in window.game.displays ) {
		console.log(item_name);
		checked = '';
		if ( window.game.displays[ item_name ] ){
			checked = 'checked';
		}
		$checkbox = $('<li><input type="checkbox" id="display-' + item_name + '" ' + checked + '/><label for="display-' + item_name + '">' + item_name + '</label></li>');
		$("#displays ul").append( $checkbox );
	}


	$("#reset").click( function(){
		reset();
		return false;
	});

	$("#displays input").change( function(){
		item_name = $(this).attr('id').split('-')[1];
		console.log(item_name);
		if ( $(this).is( ':checked' ) ){
			window.game.displays[item_name] = true;
		} else {
			window.game.displays[item_name] = false;
		}
	});
});