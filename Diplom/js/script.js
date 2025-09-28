// Импорт библиотек
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Сцена
const scene = new THREE.Scene();

// Параметры сцены 
const sceneWith = 400;
const sceneHeigth = 400;


// Камера
const camera = new THREE.PerspectiveCamera(75, sceneWith / sceneHeigth, 0.1, 1000);
camera.position.set(2.8, 1, 0.8); // немного выше и отодвинута назад

// Рендерер
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });


renderer.setSize(sceneWith, sceneHeigth);


document.getElementById("container3D").appendChild(renderer.domElement);

// Свет
scene.add(new THREE.AmbientLight(0xffffff, 0.8)); // общий мягкий свет
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(10, 10, 5);
scene.add(dirLight);



// Загрузка модели
const loader = new GLTFLoader();
loader.load(
  "./models/model/scene.gltf", // путь до модели
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    console.log("✅ Модель успешно загружена:", model);
  },
  undefined,
  (error) => {
    console.error("❌ Ошибка загрузки модели:", error);
  }
);

// Управление камерой (вращение/зум)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // плавное движение
controls.minDistance = 35; // минимальное приближение
controls.maxDistance = 60; // максимальное отдаление

// Рендеринг
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Обновление при ресайзе окна
window.addEventListener("resize", () => {
  camera.aspect = sceneWith / sceneHeigth;
  camera.updateProjectionMatrix();
  renderer.setSize(sceneWith, sceneHeigth);
});
