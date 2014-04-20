function Game(){

}

Game.prototype = {

	initialize: function(){
		this.canvas_element = document.getElementById( "game-canvas" );
		this.context        = this.canvas_element.getContext("2d");

	},

	start: function(){
	    // start the animation
	    requestAnimFrame( window.gameobj.run );
	},

	run: function(){
		mainloop();
        requestAnimFrame( window.gameobj.run );
	},

	clear_canvas: function(){
		this.context.clearRect( 0, 0, canvas.width, canvas.height ); // clear canvas
	}

}