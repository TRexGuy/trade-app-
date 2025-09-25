"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function GlobeBackground() {
  const mountRef = useRef(null);
  const [showHint, setShowHint] = useState(true);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    let cameraZ = mountRef.current.clientWidth < 768 ? 15 : 10;
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = cameraZ;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setClearColor(0x000000, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);
    // --- Stars ---
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 5000;
    const positions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
    }
    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
    // --- Atmosphere Shader ---
    const atmosphereVertexShader = `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    const atmosphereFragmentShader = `
      uniform vec3 glowColor;
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(glowColor, 1.0) * intensity;
      }
    `;
    const atmosphereGeometry = new THREE.SphereGeometry(5.2, 32, 32);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      uniforms: { glowColor: { value: new THREE.Color(0x01e4f8) } },
    });
    const atmosphereMesh = new THREE.Mesh(
      atmosphereGeometry,
      atmosphereMaterial
    );
    scene.add(atmosphereMesh);
    // --- Wireframe Globe ---
    const wireframeGeometry = new THREE.SphereGeometry(5, 32, 32);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x01e4f8,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const wireframeGlobe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframeGlobe);
    // --- Core & Middle Layers ---
    const coreGlobe = new THREE.Mesh(
      new THREE.SphereGeometry(4.8, 64, 64),
      new THREE.MeshPhongMaterial({
        color: 0x020818,
        transparent: true,
        opacity: 0.1,
      })
    );
    scene.add(coreGlobe);
    const middleMaterial = new THREE.MeshPhongMaterial({
      color: 0x01e4f8,
      transparent: true,
      opacity: 0.25,
      emissive: 0x01e4f8,
      emissiveIntensity: 0.6,
      shininess: 50,
    });
    const middleGlobe = new THREE.Mesh(
      new THREE.SphereGeometry(5, 32, 32),
      middleMaterial
    );
    scene.add(middleGlobe);
    // --- Lights ---
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    // --- Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.1;
    // --- Color Animation ---
    const colors = [0x01e4f8, 0x0a84ff, 0x6b46c1, 0x01e4f8].map(
      (c) => new THREE.Color(c)
    );
    let colorIndex = 0;
    let nextColorIndex = 1;
    let colorT = 0;
    const colorTransitionSpeed = 0.002;
    const lerpColor = (a, b, t) => {
      const color = new THREE.Color();
      color.r = a.r + (b.r - a.r) * t;
      color.g = a.g + (b.g - a.g) * t;
      color.b = a.b + (b.b - a.b) * t;
      return color;
    };
    let pulseT = 0;
    const pulseSpeed = 0.01;
    // --- Animate ---
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      wireframeGlobe.rotation.y += 0.001;
      middleGlobe.rotation.y += 0.001;
      coreGlobe.rotation.y += 0.001;
      atmosphereMesh.rotation.y += 0.0005;
      stars.rotation.y += 0.0001;
      colorT += colorTransitionSpeed;
      if (colorT >= 1) {
        colorT = 0;
        colorIndex = nextColorIndex;
        nextColorIndex = (nextColorIndex + 1) % colors.length;
      }
      const baseColor = lerpColor(
        colors[colorIndex],
        colors[nextColorIndex],
        colorT
      );
      pulseT += pulseSpeed;
      const pulseFactor = (Math.sin(pulseT) + 1) / 2;
      const finalColor = baseColor
        .clone()
        .multiplyScalar(0.5 + pulseFactor * 0.5);
      wireframeMaterial.color.copy(finalColor);
      middleMaterial.emissive.copy(finalColor);
      middleMaterial.color.copy(finalColor.clone().multiplyScalar(0.3));
      atmosphereMaterial.uniforms.glowColor.value.copy(finalColor);
      atmosphereMaterial.needsUpdate = true;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    // --- Handle Resize (Responsive!) ---
    const handleResize = () => {
      if (!mountRef.current) return;
      const { clientWidth, clientHeight } = mountRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      camera.position.z = clientWidth < 768 ? 15 : 10;
      renderer.setSize(clientWidth, clientHeight);
    };
    window.addEventListener("resize", handleResize);
    const hintTimer = setTimeout(() => setShowHint(false), 3000);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      controls.dispose();
      clearTimeout(hintTimer);
    };
  }, []);
  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10 w-full h-full overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/20 pointer-events-none" />
      {showHint && (
        <div className="absolute bottom-4 right-4 bg-black/40 text-white text-sm px-4 py-2 rounded-2xl border border-white/10 shadow-lg">
          Drag to explore pouyam world...
        </div>
      )}
    </div>
  );
}
