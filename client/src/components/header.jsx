import React, {useState} from "react";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";

export default function Header(props) {

  
  return (
    <div className="header" style={props?.style}>
      <h1 className={`title display-1 my-4 text-center`}>
        Generate new Credit Card
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <MDBInput


          className="mb-4"
          id="form5Example1"
          placeholder="First Name"
          onChange={(e) => props?.firstnamehandler(e.target.value)}
        />
        <MDBInput


          className="mb-4"
          type="text"
          id="form5Example2"
          placeholder="Last name"
          onChange={(e) => props?.lastnamehandler(e.target.value)}
        />

        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form5Example3"
          label="I have read and agree to the terms"
          defaultChecked
        />
        {/* <MDBBtn
          className="mx-2"
          color="info"
          onClick={() => props?.handleSubmitButton()}
        >
          Generate
        </MDBBtn> */}
        <button
          type="button"
          className="btn btn-info"
          
          onClick={() => {
            props?.setShow(true)
            props?.handlesubmitbutton()
            
          }}
        >
          Generate
        </button>
      </form>
    </div>
  );
}
