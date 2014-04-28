var Controls = {

	initControls: function (){
		clock = new THREE.Clock();
		controls = new THREE.FirstPersonControls(camera);
		controls.movementSpeed = 50;
		controls.lookSpeed = 0.1;
	},

	updateControls: function (delta) {
		controls.update(delta);
	}	
};