//VARIABLES CONO

var lado=1
var grilla=0;
var num=0;
var num1=0;
var num2=0;
//medidas de la pantalla
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

//render
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

//camara
var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

//cracion del cubo 1
var geometry = new THREE.BoxGeometry( lado , lado, lado );
var material = new THREE.MeshBasicMaterial( {color: 0x00FFFF} );
var cube = new THREE.Mesh( geometry, material );


//cube.translateX(lado/2);
//cube.translateY(lado/2);
//cube.translateZ(lado/2);

//cracion del cubo 2
var geometry2 = new THREE.BoxGeometry( lado/2 , lado/2, lado/2 );
var material2 = new THREE.MeshBasicMaterial( {color: 0xFF00FF} );
var cube2 = new THREE.Mesh( geometry2, material2 );


//funciones

//cube2.translateY(lado-lado/4);

//cube2.translateX(lado/2);
//cube2.translateY(lado/2);
//cube2.translateZ(lado/2);

//cracion del cubo 3
var geometry3 = new THREE.BoxGeometry( lado/4 , lado/4, lado/4 );
var material3 = new THREE.MeshBasicMaterial( {color: 0xCCFFCC} );
var cube3 = new THREE.Mesh( geometry3, material3 );


//funciones

//cube3.translateY(lado+lado/8);

//cube3.translateX(lado/2);
//cube3.translateY(lado/2);
//cube3.translateZ(lado/2);

//luz

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

//grilla

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {

      case 49: // numero 1
      grilla++
      if(grilla==1){
        scene.add(axesHelper);  
      }else if(grilla==2){
        scene.remove(axesHelper);
        grilla=0
      }
  
      break;

      case 50: // numero 2  cubo numero 1
  
      num++

      if(num==1){
      scene.add(cube);
      }else if(num==2){
      cube.translateX(lado/2);
      }else if(num==3){
      cube.translateY(lado/2);
      }else if(num==4){
      cube.translateZ(lado/2);
      }else if(num==5){
        scene.remove(cube);
        cube.translateX(-lado/2);
        cube.translateY(-lado/2);
        cube.translateZ(-lado/2);
        num=0
      }

      break;
     

      case 51: // numero 4 cubo numero 2

      num1++

      if(num1==1){
      scene.add( cube2 );
      }else if(num1==2){
      cube2.translateY(lado-lado/4);
      }else if(num1==3){
      cube2.translateX(lado/2);
      }else if(num1==4){
      cube2.translateY(lado/2);
      }else if(num1==5){
      cube2.translateZ(lado/2); 
      }else if(num1==6){
        scene.remove(cube2);
        cube2.translateY(-(lado-lado/4));
        cube2.translateX(-lado/2);
        cube2.translateY(-lado/2);
        cube2.translateZ(-lado/2);
        num1=0
      }
      
      break;

      case 52: // numero 4 cubo numero 3

      num2++

      if(num2==1){
      scene.add( cube3 );
      }else if(num2==2){
      cube3.translateY(lado+lado/8);
      }else if(num2==3){
      cube3.translateX(lado/2);
      }else if(num2==4){
      cube3.translateY(lado/2);
      }else if(num2==5){
      cube3.translateZ(lado/2); 
      }else if(num2==6){
        scene.remove(cube3);
        cube3.translateY((-lado-lado/8));
        cube3.translateX(-lado/2);
        cube3.translateY(-lado/2);
        cube3.translateZ(-lado/2);
        num2=0
      }
      
      break;

    

      case 37: // Flecha izquierda
      cube.position.x -= 0.1;
      cube2.position.x -= 0.1;
      cube3.position.x -= 0.1;
      break;
      case 38: // Flecha arriba
      cube.position.y += 0.1;
      cube2.position.y += 0.1;
      cube3.position.y += 0.1;
      break;
      case 39: // Flecha derecha
      cube.position.x += 0.1;
      cube2.position.x += 0.1;
      cube3.position.x += 0.1;

      break;
      case 40: // Flecha abajo
      cube.position.y -= 0.1;
      cube2.position.y -= 0.1;
      cube3.position.y -= 0.1;
      break;

      case 90: // z en z negativo
      cube.position.z -= 0.1;
      cube2.position.z -= 0.1;
      cube3.position.z -= 0.1;
      break;
      
      case 88: // x en z positivo
      cube.position.z += 0.1;
      cube2.position.z += 0.1;
      cube3.position.z += 0.1;
      break;

  }
})
//animation
var animate = function(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

