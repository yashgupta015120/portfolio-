import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 85;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Subtle Ambient and Point Lighting for 3D Core
    const ambientLight = new THREE.AmbientLight(0xfff5e6, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xd4af37, 2, 200);
    pointLight.position.set(20, 20, 40);
    scene.add(pointLight);

    // ========================================================
    // 1. Central 3D Interactive AI/Neural Geometric Core Model
    // ========================================================
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // Outer Geodesic Icosahedron Wireframe
    const outerRadius = window.innerWidth < 768 ? 10 : 14;
    const outerGeo = new THREE.IcosahedronGeometry(outerRadius, 1);
    const outerEdges = new THREE.EdgesGeometry(outerGeo);
    const outerMat = new THREE.LineBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const outerMesh = new THREE.LineSegments(outerEdges, outerMat);
    modelGroup.add(outerMesh);

    // Inner Glowing Octahedron
    const innerRadius = outerRadius * 0.55;
    const innerGeo = new THREE.OctahedronGeometry(innerRadius, 0);
    const innerEdges = new THREE.EdgesGeometry(innerGeo);
    const innerMat = new THREE.LineBasicMaterial({
      color: 0xf5deb3,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const innerMesh = new THREE.LineSegments(innerEdges, innerMat);
    modelGroup.add(innerMesh);

    // Orbital Equatorial Ring
    const ringGeo = new THREE.TorusGeometry(outerRadius * 1.35, 0.25, 8, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xc59e30,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    modelGroup.add(ringMesh);

    // Perceptron Core Spherical Nodes
    const coreNodeCount = 12;
    const coreNodeGeo = new THREE.SphereGeometry(0.7, 8, 8);
    const coreNodeMat = new THREE.MeshBasicMaterial({
      color: 0xffe6a3,
      blending: THREE.AdditiveBlending,
    });
    const coreNodes = new THREE.InstancedMesh(coreNodeGeo, coreNodeMat, coreNodeCount);
    const dummy = new THREE.Object3D();
    const posAttribute = outerGeo.attributes.position;
    for (let i = 0; i < coreNodeCount; i++) {
      const idx = (i * 3) % posAttribute.count;
      dummy.position.set(
        posAttribute.getX(idx),
        posAttribute.getY(idx),
        posAttribute.getZ(idx)
      );
      dummy.scale.setScalar(0.8);
      dummy.updateMatrix();
      coreNodes.setMatrixAt(i, dummy.matrix);
    }
    coreNodes.instanceMatrix.needsUpdate = true;
    modelGroup.add(coreNodes);

    // Position model slightly offset towards top-right for elegant editorial composition
    modelGroup.position.set(12, 6, -10);

    // ========================================================
    // 2. Constellation Particles and Dynamic Connection Lines
    // ========================================================
    const nodeCount = window.innerWidth < 768 ? 40 : 75;
    const maxDistance = 22;
    const bounds = 65;

    const positions = new Float32Array(nodeCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * bounds * 1.5;
      positions[i * 3 + 1] = (Math.random() - 0.5) * bounds;
      positions[i * 3 + 2] = (Math.random() - 0.5) * bounds * 0.8;

      velocities.push({
        x: (Math.random() - 0.5) * 0.035,
        y: (Math.random() - 0.5) * 0.035,
        z: (Math.random() - 0.5) * 0.02,
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const colors = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      if (Math.random() > 0.35) {
        colors[i * 3] = 0.85;
        colors[i * 3 + 1] = 0.72;
        colors[i * 3 + 2] = 0.42;
      } else {
        colors[i * 3] = 0.65;
        colors[i * 3 + 1] = 0.75;
        colors[i * 3 + 2] = 0.85;
      }
    }
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const maxLines = (nodeCount * (nodeCount - 1)) / 2;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3)
    );
    lineGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(lineColors, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending,
    });

    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // ========================================================
    // 3. Smooth Interactive Cursor & Touch Handlers
    // ========================================================
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        targetMouseX = (event.touches[0].clientX / window.innerWidth - 0.5) * 2;
        targetMouseY = (event.touches[0].clientY / window.innerHeight - 0.5) * 2;
      }
    };

    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY || window.pageYOffset;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // ========================================================
    // 4. Animation Loop with Organic Interactive Tracking
    // ========================================================
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Fluid interpolation for cursor tracking
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      // Subtle 3D Model cursor following:
      // The 3D model gently translates towards cursor coordinates
      const baseModelX = window.innerWidth < 768 ? 0 : 12;
      const baseModelY = window.innerWidth < 768 ? 4 : 6;
      modelGroup.position.x = baseModelX + mouseX * 8;
      modelGroup.position.y = baseModelY - mouseY * 6 + Math.sin(elapsedTime * 1.2) * 1.5;

      // The 3D model smoothly orients to face the user's cursor with subtle rotational tilt
      modelGroup.rotation.y = elapsedTime * 0.25 + mouseX * 0.85;
      modelGroup.rotation.x = elapsedTime * 0.15 - mouseY * 0.65;
      modelGroup.rotation.z = Math.sin(elapsedTime * 0.5) * 0.15 + mouseX * 0.3;

      // Counter-rotate the inner core for multi-layered mechanical depth
      innerMesh.rotation.y = -elapsedTime * 0.45;
      innerMesh.rotation.x = -elapsedTime * 0.3;
      ringMesh.rotation.z = elapsedTime * 0.35;

      // Overall scene camera responsiveness
      scene.rotation.y = mouseX * 0.2 + scrollY * 0.0003;
      scene.rotation.x = -mouseY * 0.15 + scrollY * 0.00015;
      camera.position.z = 85 + Math.sin(scrollY * 0.001) * 6;

      // Update particle field positions
      const posArray = particleGeometry.attributes.position.array as Float32Array;
      const halfWidth = bounds * 0.8;
      const halfHeight = bounds * 0.5;
      const halfDepth = bounds * 0.4;

      for (let i = 0; i < nodeCount; i++) {
        posArray[i * 3] += velocities[i].x;
        posArray[i * 3 + 1] += velocities[i].y;
        posArray[i * 3 + 2] += velocities[i].z;

        if (posArray[i * 3] < -halfWidth || posArray[i * 3] > halfWidth) velocities[i].x *= -1;
        if (posArray[i * 3 + 1] < -halfHeight || posArray[i * 3 + 1] > halfHeight) velocities[i].y *= -1;
        if (posArray[i * 3 + 2] < -halfDepth || posArray[i * 3 + 2] > halfDepth) velocities[i].z *= -1;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Update particle network connection lines
      let lineIndex = 0;
      let colorIndex = 0;

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = posArray[i * 3] - posArray[j * 3];
          const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
          const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            const alpha = 1.0 - dist / maxDistance;

            linePositions[lineIndex++] = posArray[i * 3];
            linePositions[lineIndex++] = posArray[i * 3 + 1];
            linePositions[lineIndex++] = posArray[i * 3 + 2];

            linePositions[lineIndex++] = posArray[j * 3];
            linePositions[lineIndex++] = posArray[j * 3 + 1];
            linePositions[lineIndex++] = posArray[j * 3 + 2];

            lineColors[colorIndex++] = 0.85 * alpha;
            lineColors[colorIndex++] = 0.68 * alpha;
            lineColors[colorIndex++] = 0.35 * alpha;

            lineColors[colorIndex++] = 0.65 * alpha;
            lineColors[colorIndex++] = 0.75 * alpha;
            lineColors[colorIndex++] = 0.85 * alpha;
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIndex / 3);
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      outerGeo.dispose();
      outerEdges.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerEdges.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      coreNodeGeo.dispose();
      coreNodeMat.dispose();
      coreNodes.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-75"
      aria-hidden="true"
    />
  );
};
