import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as THREE from 'https://unpkg.com/three@0.121.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.121.1/examples/jsm/controls/OrbitControls';
import * as CANNON from 'https://unpkg.com/cannon-es@0.15.1/dist/cannon-es.js';
import Outliner from 'https://cdn.jsdelivr.net/gh/ycw/three-font-outliner@1.0.2/src/index.js';

function App() {
  // ----
  // Boot
  // ----

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 2, 0.1, 100);
  const controls = new OrbitControls(camera, renderer.domElement);
  window.addEventListener('resize', () => {
    const { clientWidth, clientHeight } = renderer.domElement;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(clientWidth, clientHeight, false);
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
  });
  document.body.prepend(renderer.domElement);
  window.dispatchEvent(new Event('resize'));
  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
    controls.update();
    scene.userData.loop && scene.userData.loop(clock.getDelta());
  });

  // ----
  // Main
  // ----

  scene.background = new THREE.Color('white');
  camera.position.set(0, 5, 1);
  controls.autoRotate = true;
  renderer.shadowMap.enabled = true;

  const light = new THREE.DirectionalLight();
  light.castShadow = true;
  light.shadow.mapSize.set(1024, 1024);
  scene.add(light);

  const geom = new THREE.PlaneBufferGeometry(10, 10);
  geom.rotateX(-0.5 * Math.PI);
  const ground = new THREE.Mesh(
    geom,
    new THREE.ShadowMaterial({ transparent: true, opacity: 0.5 })
  );
  ground.receiveShadow = true;
  scene.add(ground);

  scene.add(new THREE.GridHelper());

  const c_world = new CANNON.World();
  c_world.gravity.set(0, -10, 0);

  const c_groundBody = new CANNON.Body({ shape: new CANNON.Plane() });
  c_groundBody.quaternion.setFromEuler(-0.5 * Math.PI, 0, 0);
  c_world.addBody(c_groundBody);

  (async function () {
    const outliner = await Outliner.fromUrl(
      'https://cdn.jsdelivr.net/gh/ycw/three-font-outliner@1.0.2/examples/fonts/aqua/aqua.ttf',
      THREE.ShapePath
    );
    const text = Array.from(Array(26), (_, i) => String.fromCodePoint(i + 65));
    const groups = [];

    for (const [i, char] of text.entries()) {
      const { shapes, w, h } = outliner.outline(char, { size: 1 });

      const group = new THREE.Group();
      const geom = new THREE.ExtrudeBufferGeometry(shapes, {
        depth: 0.2,
        curveSegments: 4,
        bevelSize: 0.05,
        bevelThickness: 0.1,
      }).center();
      const mesh = new THREE.Mesh(
        geom,
        new THREE.MeshPhongMaterial({
          color: new THREE.Color().setHSL(Math.random(), 1, 0.9),
        })
      );
      mesh.castShadow = mesh.receiveShadow = true;
      group.add(mesh);
      group.add(
        new THREE.LineSegments(
          new THREE.EdgesGeometry(geom, 20),
          new THREE.LineBasicMaterial({ color: 'black' })
        )
      );
      scene.add(group);

      const size = geom.boundingBox.getSize(new THREE.Vector3());
      const c_body = new CANNON.Body({
        mass: 1,
        shape: new CANNON.Box(size.multiplyScalar(0.45)),
      });
      c_body.position.set(w, (i + 1) * h, 0);
      c_body.quaternion.setFromEuler((i * Math.PI) / 10, 0, 0);
      c_world.addBody(c_body);
      group.userData = { c_body };
      groups.push(group);
    }

    scene.userData.loop = (dt) => {
      c_world.step(Math.min(1 / 60, dt));
      for (const group of groups) {
        group.position.copy(group.userData.c_body.position);
        group.quaternion.copy(group.userData.c_body.quaternion);
      }
    };
  })();
  return <div className="App"></div>;
}

export default App;
