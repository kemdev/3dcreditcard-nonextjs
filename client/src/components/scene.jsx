import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import "./scene.css";
import * as THREE from "three";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { MDBIcon } from "mdb-react-ui-kit";

// Componenets

import Header from "./header";

import FullCard from "./fullCard";
// import GetCardNumber from "./getCardNumber";

// THREEjs Frameworks
import {
  OrbitControls,
  Environment,
  useProgress,
  Plane,
  Html,
} from "@react-three/drei";

import Buttons from "./buttons";

function Loader() {
  const { progress } = useProgress();
  return (
    <div
      style={{ fontSize: "4em", color: "hotpink", fontWeight: "bolder" }}
      className="textShadow"
    >
      {progress} % loaded
    </div>
  );
}

export default function Scene() {
  const mesh = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardDetails, setCardDetails] = useState({});
  const [show, setShow] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [index, setIndex] = useState();
  // set the random card number
  const [cardInformation, setCardInformation] = useState({});

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  useEffect(() => {
    async function testApi() {
      try {
        const url = "/data/list";
        const response = await axios(url);

        setCardInformation(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    testApi();
    setIndex(randomNumber(0, 100));
    console.log("Use Effect worked");
  }, [isRandom === "random"]);

  console.log("Index", index);
  const firstNameHandler = (para) => {
    // const oldData = []
    setFirstName(para);
  };

  const lastNameHandler = (para) => {
    setLastName(para);
  };

  const handleSubmitButton = (para) => {
    // setCardDetails(firstName + " " + lastName);

    setIndex(randomNumber(0, 100));

    setCardDetails({
      fullname: cardInformation[index]?.data?.customer.name,
      expYear: cardInformation[index]?.data?.card.expirationYear
        .toString()
        .substring(2),
      cardNumber: cardInformation[index]?.data?.card.number,
      expMonth: cardInformation[index]?.data?.card.expirationMonth.toString(),
    });
    setShow(true);

    // console.log("s;lkfmvksdnfkjesbnfehjdbn");
  };
  // console.log(firstName);

  return (
    <main>
      {isRandom === false ? (
        <Buttons
          setIsRandom={setIsRandom}
          handleSubmitButton={handleSubmitButton}
        />
      ) : isRandom == "yes" ? (
        <Suspense fallback={<Loader />}>
          <Canvas
            ref={mesh}
            className="canvas"
            colorManagement
            frameloop="demand" // to turn the useFrame on when interact with the canvas
            // style={show ? { display: "block" } : { display: "none" }}
            // shadows
            shadowMap
            dpr={[1, 2]}
            pixelRatio={[1, 1.5]}
            camera={{ position: [0, 3, 75], fov: 15 }}
            resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
            onUpdate={(self) => self.camera.updateProjectionMatrix()}
          >
            <ambientLight intensity={1} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.35}
              penumbra={1}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <rectAreaLight
              intensity={1}
              position={[10, 10, 10]}
              width={10}
              height={1000}
              onUpdate={(self) => self.lookAt(new THREE.Vector3(0, 0, 0))}
            />
            <rectAreaLight
              intensity={1}
              position={[-10, -10, -10]}
              width={1000}
              height={10}
              onUpdate={(self) => self.lookAt(new THREE.Vector3(0, 0, 0))}
            />

            <FullCard cardDetails={cardDetails} />
            {/* <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -5, 0]}
              opacity={0.75}
              width={10}
              height={10}
              blur={10}
              // far={0}
            /> */}

            <Environment preset="city" />

            <OrbitControls />
          </Canvas>
          <ButtonGroup
            className="reGenerateContainer"
            style={{ zIndex: 1, marginTop: "45vh" }}
          >
            <Button
              color="success"
              className="reGenerateButton mx-5"
              onClick={(e) => setIsRandom(false)}
            >
              <MDBIcon
                fas
                icon="chevron-left"
                // className="mx-2"
                style={{ marginLeft: "1px", marginRight: "1rem" }}
              />
              Back To Home Page
            </Button>

            <Button
              color="success"
              className="reGenerateButton"
              onClick={handleSubmitButton}
            >
              Generat Another Card{" "}
              <MDBIcon
                fas
                icon="sync"
                style={{ marginRight: "1px", marginLeft: "1rem" }}
              />
            </Button>
          </ButtonGroup>
        </Suspense>
      ) : isRandom === "no" ? (
        <Header
          firstnamehandler={firstNameHandler}
          lastnamehandler={lastNameHandler}
          handlesubmitbutton={handleSubmitButton}
          // setShow={setShow}
          // style={show === true ? { display: "none" } : { display: "block" }}
        />
      ) : null}
    </main>
  );
}
