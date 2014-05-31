/*
* Mostra o FPS
*/
var FPSStats = {

	 showStats : function()  {
		container = document.createElement( 'div' );
		document.body.appendChild( container );
		stats = new Stats();
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.top = '0px';
		container.appendChild( stats.domElement );
	}
};
