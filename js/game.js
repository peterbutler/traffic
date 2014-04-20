function Game(){
	this.canvas_element = document.getElementById( "game-canvas" );
	this.context        = this.canvas_element.getContext("2d");
}

Game.prototype = {

	start: function(){
	    // start the animation
	    requestAnimFrame( window.gameobj.run );
	},

	run: function(){
	    canvas.clear();
        updateGame();
        drawGame();
        get_framerate();
        requestAnimFrame( window.gameobj.run );
	},

	clear_canvas: function(){
		this.context.clearRect( 0, 0, canvas.width, canvas.height ); // clear canvas
	}

}