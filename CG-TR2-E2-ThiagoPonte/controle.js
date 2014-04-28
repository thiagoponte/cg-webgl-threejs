THREE.FingerControls = function ( finger1Mesh, domElement ) {

	this.domElement = ( domElement !== undefined ) ? domElement : document;

	this.moveUp = false;
	this.moveDown = false;

	this.openHand = true;
	this.closeHand = false;

	this.onKeyDown = function ( event ) {

		//event.preventDefault();

		switch ( event.keyCode ) {

			case 82: /*R*/ 
				if (finger1Mesh.rotation.x >= 0.1) {
					this.moveUp = true; 
				}
				break;

			case 70: /*F*/ 
				if (finger1Mesh.rotation.x <= 3) {
					this.moveDown = true; 
				}	
				break;

		}

	};

	this.onKeyUp = function ( event ) {

		switch( event.keyCode ) {

			case 82: /*R*/ this.moveUp = false; break;
			case 70: /*F*/ this.moveDown = false; break;

		}

	};

	this.update = function( delta ) {
		if ( this.moveUp ) {
		// console.log("abre: " + frameDelta);
			if (closeHand) {
				finger1Mesh.rotation.x = finger1Mesh.rotation.x - frameDelta * 1;
				finger2Mesh.rotation.x = finger2Mesh.rotation.x - frameDelta * 1;
				finger3Mesh.rotation.x = finger3Mesh.rotation.x - frameDelta * 1;
				finger4Mesh.rotation.x = finger4Mesh.rotation.x - frameDelta * 1;
				finger5Mesh.rotation.y = finger5Mesh.rotation.y - frameDelta * 1;
				if(finger1Mesh.rotation.x <= 0.1) {
			    	openHand = true;
			    	closeHand = false;
			    }
			}

		}
		if ( this.moveDown ) {
		// console.log("fecha: " + frameDelta);
			if (openHand) {
				finger1Mesh.rotation.x = finger1Mesh.rotation.x + frameDelta * 1;
				finger2Mesh.rotation.x = finger2Mesh.rotation.x + frameDelta * 1;
				finger3Mesh.rotation.x = finger3Mesh.rotation.x + frameDelta * 1;
				finger4Mesh.rotation.x = finger4Mesh.rotation.x + frameDelta * 1;
				finger5Mesh.rotation.y = finger5Mesh.rotation.y + frameDelta * 1;
				if (finger1Mesh.rotation.x >= 3) {
			    	openHand = false;
			    	closeHand = true;
			    }
			}
		}
	};

	this.domElement.addEventListener( 'keydown', bind( this, this.onKeyDown ), false );
	this.domElement.addEventListener( 'keyup', bind( this, this.onKeyUp ), false );

	function bind( scope, fn ) {

		return function () {

			fn.apply( scope, arguments );

		};

	};
};