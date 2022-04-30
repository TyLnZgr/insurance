import React, { useEffect, useState } from "react";
import axios from "axios";
import Insurance from "./Insurance";

const InsuranceList = (props) => {
  const [insurances, setInsurance] = useState([]);

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/case1`)
      .then((res) => {
        setInsurance(res.data.offerList);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {insurances.map((ins, i) => (
        <Insurance key={i} insurances={ins}></Insurance>
      ))}
    </div>
  );
};

export default InsuranceList;
