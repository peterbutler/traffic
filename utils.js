window.performance = window.performance || {};
performance.now = (function() {
    return performance.now       ||
        performance.mozNow    ||
        performance.msNow     ||
        performance.oNow      ||
        performance.webkitNow ||
        Date.now  /*none found - fallback to browser default */
})();

function get_framerate(){
    if ( typeof prev_time === 'undefined' ){
        prev_time = performance.now();
        framerate.frames = 0;
        framerate.time   = 0;
        return 0;
    }
    time_delta = performance.now() - parseInt( prev_time );
    // we did 1 frame in time_delta milliseconds
    current_framerate = 1 / time_delta * 1000;
    framerate.frames++;
    framerate.time += time_delta;
    document.getElementById('framerate').innerHTML = Math.round( current_framerate );
    if ( Math.round( performance.now() % 1000 ) < 100 ){
        document.getElementById('framerate-avg').innerHTML = Math.round( framerate['frames'] / ( framerate['time'] / 1000 ) );
    }
    prev_time = performance.now();
}

function clear_canvas(){
	var canvas_element  = document.getElementById( "game-canvas" );
	var context = canvas_element.getContext("2d");
	context.clearRect( 0, 0, canvas.width, canvas.height ); // clear canvas
}
