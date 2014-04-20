function Canvas( element, width, height){
	this.width   = width;
	this.height  = height;
	this.element = document.getElementById( element );
	this.context = this.element.getContext("2d");
	this.element.setAttribute( "width", this.width );
	this.element.setAttribute( "height", this.height );

}

Canvas.prototype = {
	clear: function(){
		this.context.clearRect( 0, 0, this.width, this.height ); // clear canvas
	}

}