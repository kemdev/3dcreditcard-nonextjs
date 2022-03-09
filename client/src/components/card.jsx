import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

export default function Card({ children }) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // useFrame(() => {
  //   console.log('Mesh from Cards:', mesh.current);
  // })

  return (
    <RoundedBox
      args={[12, 7, 0.2]}
      radius={0.2}
      ref={mesh}
      smoothness={4}
    >
      {children}
      <meshStandardMaterial
        attach="material"
        color={"hotpink"}
        roughness={0.1}
        metalness={0.3}
      />
    </RoundedBox>
  );
}
