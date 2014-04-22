function Traveler() {
	this.arrived = false;
}

Traveler.prototype = {
	reset: function( ){
		this.start_place_index = Math.floor( ( Math.random() * places.length - 1 ) + 1 );
	    this.last_place = traveler.start_place_index;
	    this.next_place = null;
	    this.x          = places[ traveler.start_place_index ].x;
	    this.y          = places[ traveler.start_place_index ].y;
	    this.x_speed = 0;
	    this.y_speed = 0;
	    this.history = [];
	    this.distance_traveled = 0;
	    if ( game.single_goal ){
		    traveler.goal_place_index = single_goal;
	    } else {
		    while( traveler.goal_place_index == null || traveler.goal_place_index == traveler.start_place_index ){
			    traveler.goal_place_index  = Math.floor( ( Math.random() * places.length - 1 ) + 1 );
		    }
	    }
	},
	has_arrived: function( place_index ){
		if( Math.round( this.x ) == places[ place_index ].x &&
			Math.round( this.y ) == places[ place_index ].y
		){
			return true;
		}
		return false;
    },
	choose_next_place: function(){
		valid_places = new Array;
		if ( this.next_place != null ){
			this.last_place = this.next_place;
		}
		this.x == places[ this.last_place ].x;
		this.y == places[ this.last_place ].y;

		this.history[ this.history.length ] = this.last_place;
		goal = places[ this.goal_place_index ];
		x_diff = this.x - goal.x;
		y_diff = this.y - goal.y;
		shortest_distance = null;
		for( var place_count in places ){
			valid = false;

			if ( place_count == this.last_place ){ continue; }
			if ( in_array( place_count, this.history ) ){ continue; }
			place = places[ place_count ];

			if ( goal.x <= Math.round( this.x ) ) {
				if ( place.x <= this.x ){
					valid = true;
				} else {
					valid = false;
					continue;
				}
			} else {
				if ( place.x >= Math.round( this.x ) ) {
					valid = true;
				} else {
					valid = false;
					continue;
				}
			}

			if ( goal.y <= Math.round( this.y ) ) {
				if ( place.y <= this.y ){
					valid = true;
				} else {
					valid = false;
					continue;
				}
			} else {
				if ( place.y >= Math.round( this.y ) ) {
					valid = true;
				} else {
					valid = false;
					continue;
				}
			}

			if ( valid ){
				valid_places[ valid_places.length ] = place_count;
				// this place is in the right direction.
				distance = get_distance( this, place );
				if ( distance < shortest_distance || shortest_distance === null ){
					shortest_distance = distance;
					this.next_place = place_count;
				}
			}
		}

		valid_places = [];

		current_grid_x = Math.floor( ( this.x / gameobj.canvas.width ) * 10 );
		current_grid_y = Math.floor( ( this.y / gameobj.canvas.height ) * 10 );

		for ( x_grid = current_grid_x - 1; x_grid <= current_grid_x + 1; ++x_grid ){
			if ( x_grid < 0 || x_grid > 10 ){
				continue;
			}
			for ( y_grid = current_grid_y - 1; y_grid <= current_grid_y + 1; ++y_grid ){
				if ( y_grid < 0 || y_grid > 10 ){
					continue;
				}
				for( var place_index in grid[ x_grid ][ y_grid ] ){
					valid_places[ valid_places.length ] = grid[ x_grid ][ y_grid ][ place_index ];
				}
			}
		}


	}
}

function Canvas( element, width, height ){
	this.element = document.getElementById( element );
	if ( typeof width === 'undefined' ){
		this.width = this.element.offsetWidth;
	} else {
		this.width   = width;
		this.element.setAttribute( "width", this.width );
	}
	if ( typeof height === 'undefined' ){
		this.height = this.element.offsetHeight;
	} else {
		this.height   = height;
		this.element.setAttribute( "height", this.height );
	}

	this.context = this.element.getContext("2d");
}

Canvas.prototype = {
	clear: function(){
		this.context.clearRect( 0, 0, this.width, this.height ); // clear canvas
	}

}