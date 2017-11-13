/**
 * author: JSサポーターズ
 * リスト2: デバイスの傾きに併せて立方体を傾ける
 * jsFiddle: http://jsfiddle.net/javascript150/T7aLm/
 * 対応デバイスはiOS4.2以降 / Android 3.0以降
 */

if ('ondevicemotion' in window) {
  // シーンの作成
  var scene = new THREE.Scene();

  // カメラの作成
  var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.y = 150;
  camera.position.z = 500;
  scene.add(camera);

  // 立方体の作成
  var cube = new THREE.Mesh(
    new THREE.CubeGeometry(200, 200, 200),
    new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true})
  );
  cube.position.y = 100;
  scene.add(cube);

  // レンダラーの作成
  var renderer = new THREE.CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // センサーを検出して立方体の向きを変える
  window.addEventListener('devicemotion', function (e) {
    var acg = e.accelerationIncludingGravity;
    cube.rotation.x = acg.y * -0.3;
    cube.rotation.y = acg.x * 0.3;
    renderer.render(scene, camera);
  }, false);

  renderer.render(scene, camera);

  scrollTo(0, 0);
} else {
  document.body.innerText = "傾き検知を利用できないデバイスです。";
}

