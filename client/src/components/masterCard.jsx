import React from "react";
import { Cylinder } from "@react-three/drei";

export default function masterCard(props) {
  return (
    <Cylinder
      args={[1, 1, 0.3, 32]}
      rotation={[Math.PI / 2, 0, 0]}
      position={[props.positoinX || 3, -2, 0.2]}
    >
      <meshStandardMaterial
        attach="material"
        color={props.color || "#f79e1b"}
        roughness={0.1}
        metalness={0.3}
        //   position={[100, 10, -2]}
      />
    </Cylinder>
  );
}
