import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Line2 } from "three/addons/lines/Line2.js";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";
import { LineGeometry } from "three/addons/lines/LineGeometry.js";
import "./DistortField.css";

function DistortField() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(
      -1,
      1,
      1,
      -1,
      0.1,
      10
    );

    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    const LINE_COUNT = 24;
    const POINT_COUNT = 22;

    const lines = [];

    for (
      let lineIndex = 0;
      lineIndex < LINE_COUNT;
      lineIndex += 1
    ) {
      const basePoints = [];
      const currentPoints = [];

      const lineProgress =
        lineIndex / (LINE_COUNT - 1);

      const baseY =
        THREE.MathUtils.lerp(
          -0.82,
          0.82,
          lineProgress
        );

      for (
        let pointIndex = 0;
        pointIndex < POINT_COUNT;
        pointIndex += 1
      ) {
        const progress =
          pointIndex / (POINT_COUNT - 1);

        const x =
          THREE.MathUtils.lerp(
            -1,
            1,
            progress
          );

        const arch =
          Math.sin(progress * Math.PI) *
          0.09 *
          Math.sin(lineIndex * 0.7);

        const point =
          new THREE.Vector3(
            x,
            baseY + arch,
            0
          );

        basePoints.push(
          point.clone()
        );

        currentPoints.push(
          point.clone()
        );
      }

      const curve =
        new THREE.CatmullRomCurve3(
          currentPoints
        );

      curve.curveType = "catmullrom";
      curve.tension = 0.45;

      const geometry =
        new LineGeometry();

      const initialPoints =
        curve.getPoints(100);

      geometry.setPositions(
        initialPoints.flatMap((point) => [
          point.x,
          point.y,
          point.z,
        ])
      );

      const material =
        new LineMaterial({
          color: 0x7161ff,
          transparent: true,

          opacity:
            0.18 +
            lineProgress * 0.1,

          linewidth: 2,
          worldUnits: false,
        });

      const line =
        new Line2(
          geometry,
          material
        );

      line.computeLineDistances();

      scene.add(line);

      lines.push({
        line,
        geometry,
        curve,
        basePoints,
        currentPoints,
        lineIndex,
      });
    }

    function resize() {
      const width =
        container.clientWidth;

      const height =
        container.clientHeight;

      renderer.setSize(
        width,
        height,
        false
      );

      const aspect =
        width / height;

      camera.left = -aspect;
      camera.right = aspect;

      camera.top = 1;
      camera.bottom = -1;

      camera.updateProjectionMatrix();

      let fieldOffsetX = 0;

      if (aspect > 1.6) {
        fieldOffsetX = 0;
      } else if (aspect > 1.1) {
        fieldOffsetX = 0.08;
      } else {
        fieldOffsetX = 0;
      }

      lines.forEach((lineData) => {
        const {
          curve,
          geometry,
          basePoints,
          currentPoints,
          line,
        } = lineData;

        basePoints.forEach(
          (point, pointIndex) => {
            const progress =
              pointIndex /
              (POINT_COUNT - 1);

            const x =
              THREE.MathUtils.lerp(
                -aspect * 1.08,
                aspect * 1.08,
                progress
              ) + fieldOffsetX;

            point.x = x;
            currentPoints[pointIndex].x = x;
          }
        );

        curve.points =
          currentPoints;

        const resizedPoints =
          curve.getPoints(100);

        geometry.setPositions(
          resizedPoints.flatMap((point) => [
            point.x,
            point.y,
            point.z,
          ])
        );
        
        line.material.resolution.set(
          width,
          height
        );
      });
    }

    resize();

    const resizeObserver =
      new ResizeObserver(resize);

    resizeObserver.observe(
      container
    );

    const clock =
      new THREE.Clock();

    let frameId;

    function animate() {
      const time =
        clock.getElapsedTime();

      lines.forEach(
        (lineData) => {
          const {
            line,
            curve,
            geometry,
            basePoints,
            currentPoints,
            lineIndex,
          } = lineData;

          currentPoints.forEach(
            (point, pointIndex) => {
              const base =
                basePoints[
                  pointIndex
                ];

              const progress =
                pointIndex /
                (POINT_COUNT - 1);

              const idleWave =
                Math.sin(
                  progress * 7 +
                  time * 0.55 +
                  lineIndex * 0.38
                ) * 0.025;

              const secondWave =
                Math.cos(
                  progress * 4 -
                  time * 0.35 +
                  lineIndex * 0.25
                ) * 0.015;

              const targetX =
                base.x;

              const targetY =
                base.y +
                idleWave +
                secondWave;

              point.x +=
                (
                  targetX -
                  point.x
                ) * 0.12;

              point.y +=
                (
                  targetY -
                  point.y
                ) * 0.12;
            }
          );

          curve.points =
            currentPoints;

          const updatedPoints =
            curve.getPoints(100);

          geometry.setPositions(
            updatedPoints.flatMap((point) => [
              point.x,
              point.y,
              point.z,
            ])
          );

          line.position.z =
            Math.sin(
              time * 0.35 +
              lineIndex * 0.2
            ) * 0.01;
        }
      );

      renderer.render(
        scene,
        camera
      );

      frameId =
        requestAnimationFrame(
          animate
        );
    }

    animate();

    return () => {
      cancelAnimationFrame(
        frameId
      );

      resizeObserver.disconnect();

      lines.forEach(
        ({
          line,
          geometry,
        }) => {
          geometry.dispose();

          line.material.dispose();

          scene.remove(line);
        }
      );

      renderer.dispose();

      if (
        renderer.domElement
          .parentNode ===
        container
      ) {
        container.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="distort-field"
      aria-hidden="true"
    />
  );
}

export default DistortField;