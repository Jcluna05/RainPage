import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Escena from "./Escena";

function ThreeScene() {
  useEffect(() => {
    const test = new Escena("myThreeJsCanvas");
    test.initialize();
    test.animate();

    test.scene.background = new THREE.Color(0x547dbf); // Cambia el color de fondo a negro
    test.renderer.shadowMap.enabled = true; // Habilita el mapeo de sombras en el renderizador
    test.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Tipo de sombras suaves

    test.scene.receiveShadow = true; // Permite que la escena reciba sombras
    test.scene.castShadow = true; // Permite que la escena emita sombras

    const al = new THREE.AmbientLight(0xe8d49b, 0.05);
    test.scene.add(al);

    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load("./assets/MapaEditado.glb", (gltfScene) => {
      loadedModel = gltfScene;
      console.log(loadedModel);
      

      /*gltfScene.scene.rotation.y = 10;*/
      gltfScene.scene.rotation.x = 0;
      gltfScene.scene.position.y = -5;
      gltfScene.scene.scale.set(5, 5, 5);
      test.scene.add(gltfScene.scene);
    });

    const animate = () => {
      if (loadedModel) {
        loadedModel.scene.rotation.x += 0.01;
        loadedModel.scene.rotation.y += 0.01;
        loadedModel.scene.rotation.z += 0.01;
      }
      requestAnimationFrame(animate);
    };
    //animate();

    function handleKeyDown(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del desplazamiento de la página

      const moveDistance = 0.5; // Distancia de movimiento de la cámara
      const rotateAngle = Math.PI / 16; // Ángulo de rotación de la cámara

      switch (event.key) {
        case "ArrowUp":
          test.camera.position.z -= moveDistance; // Mueve la cámara hacia arriba en el eje y
          break;
        case "ArrowDown":
          test.camera.position.z += moveDistance; // Mueve la cámara hacia abajo en el eje y
          break;
        case "ArrowLeft":
          test.camera.position.x -= moveDistance; // Mueve la cámara hacia la izquierda en el eje x
          break;
        case "ArrowRight":
          test.camera.position.x += moveDistance; // Mueve la cámara hacia la derecha en el eje x
          break;
        case "d":
          test.camera.rotation.y -= rotateAngle; // Rota la cámara hacia la derecha
          break;
        case "a":
          test.camera.rotation.y += rotateAngle; // Rota la cámara hacia la izquierda
          break;
        case "w":
          test.camera.position.y += moveDistance; // Rota la cámara hacia la derechas
          break;
        case "s":
           test.camera.position.y -= moveDistance; // Rota la cámara hacia la izquierda
           break;
        default:
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    
    // Desde aqui comienzo a modificar ---------------------------------------------------------------------

    let isFullscreen = false;
    const canvas = document.getElementById("myThreeJsCanvas");
    const fullscreenButton = document.createElement("button");
    fullscreenButton.innerText = "Pantalla completa";
    document.body.appendChild(fullscreenButton);

    function toggleFullscreen() {
      if (!isFullscreen) {
        if (canvas.requestFullscreen) {
          canvas.requestFullscreen();
        } else if (canvas.mozRequestFullScreen) {
          canvas.mozRequestFullScreen();
        } else if (canvas.webkitRequestFullscreen) {
          canvas.webkitRequestFullscreen();
        } else if (canvas.msRequestFullscreen) {
          canvas.msRequestFullscreen();
        }
        fullscreenButton.innerText = "Salir de pantalla completa";
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        fullscreenButton.innerText = "Pantalla completa";
      }
      isFullscreen = !isFullscreen;
    }

    fullscreenButton.addEventListener("click", toggleFullscreen);
  }, []);

  return (
    <div className="container">
      <div className="canvas-container">
        <canvas id="myThreeJsCanvas" />
      </div>
    </div>
  );
}

export default ThreeScene;
