function Game(){

}

Game.prototype = {

	initialize: function(){

	},

	start: function(){
	    // start the animation
	    requestAnimFrame( window.gameobj.run );
	},

	run: function(){
		mainloop();
        requestAnimFrame( window.gameobj.run );
	}

}