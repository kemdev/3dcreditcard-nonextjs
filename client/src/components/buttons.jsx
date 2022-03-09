import React from "react";
// import {  MDBBtnGroup } from "mdb-react-ui-kit";
// import {Button } from 'react-bootstrap';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

export default function Buttons(props) {
  return (
    <>
      <ButtonGroup
        style={{ marginTop: "45vh" }}
        className="reGenerateContainer"
      >
        <Button
          className="reGenerateButton mx-5"
          onClick={() => {
            props.setIsRandom("yes");
            props.handleSubmitButton();
          }}
        >
          Generate Random Credit Card
        </Button>
        <Button
          className="reGenerateButton"
          onClick={() => props.setIsRandom("no")}
        >
          Enter my Credit Card Data
        </Button>
      </ButtonGroup>
    </>
  );
}
