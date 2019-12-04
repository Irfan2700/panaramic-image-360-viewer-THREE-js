const THREE = require('three')
const OrbitControls = require('three-orbitcontrols')

var scene, camera, renderer, controls, geometry, edges, light1, light2, texture, line, model;

texture = new THREE.TextureLoader().load('https://i.postimg.cc/0jChBHLK/test-image2.jpg', function(){

    init();
    animate();
});

var init = function(){

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// renderer.setClearColor(0xffffff, 0)

// shadow
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// changing the background color
scene.background = new THREE.Color(0xffffff);

// mouse controls
controls = new OrbitControls(camera, renderer.domElement);
// camera.position.set(0,0,0);
camera.position.set(0,0,0);
// controls.autoRotate = true;
controls.enableKeys = true;
controls.enableRotate = true;
controls.keys = {
	LEFT: 37, //left arrow
	UP: 38, // up arrow
	RIGHT: 39, // right arrow
	BOTTOM: 40 // down arrow
}
controls.update();

geometry = new THREE.SphereBufferGeometry(10, 32, 32);
edges = new THREE.EdgesGeometry(geometry);
light1 = new THREE.DirectionalLight( 0xFFFFFF, 2);
light1.position.set(200, 200, 100);
light1.castShadow = true;
scene.add(light1);

//Set up shadow properties for the light
light1.shadow.mapSize.width = 200;  // default
light1.shadow.mapSize.height = 200; // default
light1.shadow.camera.near = 0.5;    // default
light1.shadow.camera.far = 500;     // default

light2 = new THREE.DirectionalLight( 0xFFFFFF, 2);
light2.position.set(-250, -1000, -400);
light2.castShadow = true;
// scene.add(light2);


// var texture = new THREE.ImageUtils.loadTexture( 'everaldo-coelho-2tigIl6Tt7E-unsplash.jpg', function(){renderer.render(scene, camera);});

// texture.anisotropy = renderer.getMaxAnisotropy();

line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x000000}));
material = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});
model = new THREE.Mesh(geometry, material);
model.castShadow = true;
model.recieveShadow = false;
// model.side = THREE.Doubleide;
// scene.add(line);
scene.add(model);

// var planeGeometry = new THREE.PlaneBufferGeometry( 30, 20, 32, 50 );
// var planeMaterial = new THREE.MeshPhongMaterial( { color: 0x00ff00 } )
// var plane = new THREE.Mesh( planeGeometry, planeMaterial );
// plane.receiveShadow = true;
// scene.add( plane );

camera.position.z = 0.5;

}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    
}
// init(); 
// animate();