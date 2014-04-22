function Game(){
	this.canvas = new Canvas( 'game-canvas', window.innerWidth, window.innerHeight );
	console.log( this );
	init_cached_canvases();
}

Game.prototype = {

	start: function(){
		init_places( game.place_count );
		init_travelers( game.traveler_count );
	    // start the animation
	    requestAnimFrame( window.gameobj.run );
	},

	run: function(){
	    gameobj.canvas.clear();
        updateGame();
        drawGame();
        get_framerate();
        requestAnimFrame( window.gameobj.run );
	},

	clear_canvas: function(){
		this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height ); // clear canvas
	}

}