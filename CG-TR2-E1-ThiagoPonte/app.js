/* Global vars */
var controls, clock;
var INV_MAX_FPS = 1 / 100, frameDelta = 0;
var container, stats;
var renderer, camera, scene;
var mesh;
var group;

//Pontos da palma da mão
var handP1 = new THREE.Vector3( -100, -100, 10 );
var handP2 = new THREE.Vector3( 100, 100, -10 );

//Pontos do primeiro dedo
var fingerP1 = new THREE.Vector3( -10, 100, 10 );
var fingerP2 = new THREE.Vector3( 20, 20, -10 );

//Material dos objetos
var material = new THREE.MeshBasicMaterial({color: 0x000000});
var F1material = new THREE.MeshBasicMaterial({color: 0x000000});


/* Code Execution */

//Exibe o contador de FPS
FPSStats.showStats();

//Inicializa o renderer, camera e scene
Setup.init();

//Move a scene com mouse e teclado, desabilitado
// Controls.initControls();

//Rendereriza a scene
drawScene();

//Atualiza a scene
animate();


/*
* Rendereriza a scene
*/
function drawScene(){

	group = new THREE.Object3D();
	group.position.set( 0,0,0 );

	//Desenha a palma da mão
	var handMesh = drawModel(handP1, handP2, material);

	//Desenha os dedos
	var finger1Mesh = drawModel(fingerP1, fingerP2, F1material);
	var finger2Mesh = finger1Mesh.clone();
	var finger3Mesh = finger1Mesh.clone();
	var finger4Mesh = finger1Mesh.clone();
	var finger5Mesh = finger1Mesh.clone();

	finger1Mesh.position.x = -90;
	finger1Mesh.position.y = 80;
	finger1Mesh.position.z = 0;

	finger2Mesh.position.x = -30;
	finger2Mesh.position.y = 80;
	finger2Mesh.position.z = 0;

	finger3Mesh.position.x = 25;
	finger3Mesh.position.y = 80;
	finger3Mesh.position.z = 0;

	finger4Mesh.position.x = 80;
	finger4Mesh.position.y = 80;
	finger4Mesh.position.z = 0;

	finger5Mesh.position.x = -80;
	finger5Mesh.position.y = -50;
	finger5Mesh.position.z = 0;
	finger5Mesh.rotation.z = 1;

	//cria a hierarquia
	group.add(handMesh);
	group.add(finger1Mesh);
	group.add(finger2Mesh);
	group.add(finger3Mesh);
	group.add(finger4Mesh);
	group.add(finger5Mesh);

	//adiciona os objetos a scene
	scene.add(group);
}

/*
* funcão para desenhar paralelepipedo
*/
function drawModel(p1, p2, material) {

	/*
		 f____g
		 /|  /|
	   b/_|_/_|h
		|e/ |c/
		|/__|/
		a   d
	*/


	var vertices = [
        new THREE.Vector3(p2.x,p2.y,p1.z),	//C
        new THREE.Vector3(p2.x,p2.y,p2.z),	//G
        new THREE.Vector3(p2.x,p1.y,p1.z),	//D
        new THREE.Vector3(p2.x,p1.y,p2.z),	//H
        new THREE.Vector3(p1.x,p2.y,p2.z),	//F
        new THREE.Vector3(p1.x,p2.y,p1.z),	//B
        new THREE.Vector3(p1.x,p1.y,p2.z),	//E
        new THREE.Vector3(p1.x,p1.y,p1.z)	//A
    ];

	var faces = [
        new THREE.Face3(0,2,1),
        new THREE.Face3(2,3,1),
        new THREE.Face3(4,6,5),
        new THREE.Face3(6,7,5),
        new THREE.Face3(4,5,1),
        new THREE.Face3(5,0,1),
        new THREE.Face3(7,6,2),
        new THREE.Face3(6,3,2),
        new THREE.Face3(5,7,0),
        new THREE.Face3(7,2,0),
        new THREE.Face3(1,3,4),
        new THREE.Face3(3,6,4)
	];

	var geometry = new THREE.Geometry();
	geometry.vertices = vertices;
	geometry.faces = faces;
	geometry.computeCentroids();
	geometry.mergeVertices();

	mesh = new THREE.Mesh(geometry, material);

	return mesh;
}

/*
* Funcão para atualizar a scene
*/
function animate() {
	requestAnimationFrame( animate );

	//Rotation dos objetos
	group.rotation.y = Date.now() * 0.0004;

	//Atualiza o controle via mouse e teclado, desabilitado
	// frameDelta += clock.getDelta();
	// while (frameDelta >= INV_MAX_FPS) {
	// 	Controls.updateControls(INV_MAX_FPS);
	// 	frameDelta -= INV_MAX_FPS;
	// }

	//atualiza o contador de FPS
	stats.update();

	//Atualiza a scene
	renderer.render( scene, camera );
}
