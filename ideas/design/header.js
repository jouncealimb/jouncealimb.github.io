
			var container, stats;
			var camera, scene, raycaster, renderer;
			var mouse = new THREE.Vector2(), INTERSECTED;
			var radius = 100, theta = 0;
			init();
			animate();

			function init() {
				//container = document.createElement( 'div' );
				container = document.getElementById( 'test' );
				//document.body.appendChild( container );
				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 5, 1000 );
				scene = new THREE.Scene();
				var light = new THREE.DirectionalLight( 0xffffff, 1 );
				light.position.set( 1, 1, 1 ).normalize();
				scene.add( light );
				//var geometry = new THREE.BoxBufferGeometry( 20, 20, 20 );
				var geometry = new THREE.DodecahedronGeometry( 7 );
				//var geometry = new THREE.RingGeometry( 1, 5, 32 );
				for ( var i = 0; i < 11; i ++ ) {
					//var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
					//var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { transparent: true, opacity: 0.5 } ) );
					var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0xffffff, opacity: 0.2 } ) );
					object.position.x = Math.random() * 100 - 40;
					object.position.y = Math.random() * 100 - 40;
					object.position.z = Math.random() * 100 - 40;
					object.rotation.x = Math.random() * 2 * Math.PI;
					object.rotation.y = Math.random() * 2 * Math.PI;
					object.rotation.z = Math.random() * 2 * Math.PI;
					object.scale.x = Math.random() + 0.5;
					object.scale.y = Math.random() + 0.5;
					object.scale.z = Math.random() + 0.5;
					scene.add( object );
				}
				for ( var i = 0; i < 30/2; i ++ ) {
					//var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
					//var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { transparent: true, opacity: 0.5 } ) );
					var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0xffffff, wireframe: true } ) );
					object.position.x = Math.random() * 100 - 40;
					object.position.y = Math.random() * 100 - 40;
					object.position.z = Math.random() * 100 - 40;
					object.rotation.x = Math.random() * 2 * Math.PI;
					object.rotation.y = Math.random() * 2 * Math.PI;
					object.rotation.z = Math.random() * 2 * Math.PI;
					object.scale.x = Math.random() + 0.5;
					object.scale.y = Math.random() + 0.5;
					object.scale.z = Math.random() + 0.5;
					scene.add( object );
				}
				raycaster = new THREE.Raycaster();
				renderer = new THREE.WebGLRenderer();
				renderer.setClearColor( 0x000 ); //background color
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.sortObjects = false;
				container.appendChild(renderer.domElement);
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				window.addEventListener( 'resize', onWindowResize, false );
			}

			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}

			function onDocumentMouseMove( event ) {
				event.preventDefault();
				mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
			}
			
			function animate() {
				requestAnimationFrame( animate );
				render();
				stats.update();
			}

			function render() {
				theta += 0.1;
				camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
				camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
				camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
				camera.lookAt( scene.position );
				camera.updateMatrixWorld();

				// find intersections
				raycaster.setFromCamera( mouse, camera );
				var intersects = raycaster.intersectObjects( scene.children );
				if ( intersects.length > 0 ) {
					if ( INTERSECTED != intersects[ 0 ].object ) {
						if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
						INTERSECTED = intersects[ 0 ].object;
						INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
						INTERSECTED.material.emissive.setHex( 0xff0000 );
					}
				} else {
					if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
					INTERSECTED = null;
				}
				renderer.render( scene, camera );
			}
		