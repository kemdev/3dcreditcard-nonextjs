import React, { useEffect, useRef, useState } from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
// Font
import Roboto from "../font-for-threejs/Roboto_Regular.json";
// import OCR-A_Regular from "../font-for-threejs/";
import ocra from "../font-for-threejs/OCR-A_Regular.json"

// import {TextGeometry}  from 'three/examples/jsm/geometries/TextGeometry.js'
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { extend, useFrame } from "@react-three/fiber";

// extend({ TextGeometry })
extend({ TextGeometry });

export default function Text(props) {
  const mesh = useRef(null);

  const [fontFamily, setFontFamily] = useState(ocra)

  useFrame(() => {
    mesh.current.geometry.center();
    mesh.current.updateMatrix();

    // console.log(mesh.current);
  });

  const font = new FontLoader().parse(fontFamily);
  const [height, setHeight] = useState(1);
  const textOptions = {
    font,
    size: 1,
    height,
  };

  useEffect(() => {
    setHeight(0.3);
    // setFontFamily()
    if(props.fontFamily === 'robo') setFontFamily(Roboto)
    else if(props.fontFamily === 'ocra') setFontFamily(ocra)
  }, []);

  return (
    <mesh
      ref={mesh}
      scale={props.scale}
      position={[props.positionX, props.positionY, 0.2]}
      castShadow
      receiveShadow
    >
      <textGeometry attach="geometry" args={[props.text, textOptions]} />
      <meshStandardMaterial 
      attach="material"
      color="grey"
      roughness={0.2}
      metalness={1}
      // color="#a40d62"
      castShadow
      />
    </mesh>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Test 3D text creator                            */

/* -------------------------------------------------------------------------- */
/*                                    END                                     */
/* -------------------------------------------------------------------------- */
