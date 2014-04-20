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