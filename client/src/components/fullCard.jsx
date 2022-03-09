import React, { useState, useEffect } from "react";

// import components
import Card from "./card";
import Text3D from "./text";
import MasterCard from "./masterCard";
// import visa icon
import { MDBIcon } from "mdb-react-ui-kit";

// THREEjs Frameworks
import { Html, PresentationControls } from "@react-three/drei";

export default function FullCard(props) {
  // tranform Z axis to fix the text from being inside the card
  const fixTxtOnCard = 0.16;

  // Fix the size of the stage
  const stageSizeAllAxis = 2;

  return (
    <PresentationControls
      global={true} // Spin globally or by dragging the model
      // cursor={false} // Whether to toggle cursor style on drag
      // snap={{ mass: 1, tension: 170 }} // Snap-back to center (can also be a spring config)
      speed={10} // Speed factor
      zoom={1.2} // Zoom factor when half the polar-max is reached
      rotation={[0, 0, 0]} // Default rotation
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      config={{ mass: 1, tension: 170, friction: 260 }} // Spring config
    >
      <Card>
        <Html
          as="div"
          transform
          prepend
          occlude
          position={[4, 0, fixTxtOnCard]}
          roughness={0.2}
          metalness={1}
        >
          <span>
            <MDBIcon
              fab
              icon="cc-visa"
              className="visaIcon"
              style={{ color: "#eb0076" }}
            />
          </span>
        </Html>
        {/* <MasterCard />
        <MasterCard color="#eb001b" positoinX={2} /> */}
        <Text3D
          text={props?.cardDetails?.fullname}
          positionX={-2}
          positionY={-2}
          scale={props?.cardDetails?.fullname.length <= 15 ? 0.6 : 0.5}
        />
        <Text3D
          text={props?.cardDetails?.cardNumber}
          positionX={-1.5}
          positionY={0}
          scale={0.5}
        />
        <Text3D
          text={`${props?.cardDetails?.expMonth}/${props?.cardDetails?.expYear}`}
          positionX={4}
          positionY={-2}
          fontFamily="robo"
          scale={0.5}
        />
      </Card>
    </PresentationControls>
  );
}
