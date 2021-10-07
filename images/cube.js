  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer( { canvas: document.getElementById('my_canvas'), alpha: true } );
  renderer.setSize(500,500);
  renderer.setClearColor( 0xffffff, 0);
  // document.body.appendChild( renderer.domElement );

  var geometry = new THREE.BoxGeometry( 1, 1, 1, 1, 1, 1 );
  for ( var i = 0; i < geometry.faces.length; i ++ ) {
    geometry.faces[ i ].color.setHex( Math.random() * 0xffffff );
  }
  var material = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 2;

  var render = function () {
    requestAnimationFrame( render );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;


    renderer.render(scene, camera);
  };

  render();
