function Game(){
	this.canvas = new Canvas( 'game-canvas', window.innerWidth, window.innerHeight );
}

Game.prototype = {
	displays: {
		potential_places: false,
		goals:            true,
		places:           true,
		travelers:        true,
		next_chosen:      false,
		history:          true,
	},
	options: {
		layout:           'random',
	},
	traveler_count: 1,
	place_count:    500,
	single_goal:    true,

	sizes: {
		place: 6,
		traveler: 4,
	},
	start: function(){
		init_places( game.place_count );
		init_travelers( game.traveler_count );
	    // start the animation
	    requestAnimFrame( window.game.run );
	},

	run: function(){
	    game.canvas.clear();
        updateGame();
        drawGame();
        get_framerate();
        requestAnimFrame( window.game.run );
	},

	clear_canvas: function(){
		this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height ); // clear canvas
	}

}