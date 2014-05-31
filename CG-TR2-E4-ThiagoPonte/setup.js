/*
* Inicializa o renderer, camera e scene
*/
var Setup ={

	init: function () {
		renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(window.innerWidth , window.innerHeight);
		renderer.setClearColor(0xffffff, 1);

		document.body.appendChild( renderer.domElement );

		camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.position.z = 360;
		camera.up = new THREE.Vector3(0,1,0);
		camera.lookAt(new THREE.Vector3(0,0,0));

		// LIGHTS

		ambientLight = new THREE.AmbientLight( 0x333333 );	//0.2

		light = new THREE.DirectionalLight( 0xffffff, 1.0 );

		scene = new THREE.Scene();
		clock = new THREE.Clock();

		// GUI
		setupGui();

		scene.add( ambientLight );
		scene.add( light );
	}
};