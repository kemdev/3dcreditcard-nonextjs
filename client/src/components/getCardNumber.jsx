import React, { useEffect } from "react";
import axios from "axios";

export default function GetCardNumber(props) {
  useEffect(() => {
    async function testApi() {
      try {
        const url = "/data/list";
        const response = await axios(url);

        props.setCardInformation(response.data)

      } catch (error) {
        console.log(error);
      }
    }

    testApi();
  }, []);

  

  return <div>GetCardNumber</div>;
}
