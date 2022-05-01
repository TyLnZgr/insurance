import React, { useEffect, useState } from "react";
import axios from "axios";
import Insurance from "./Insurance";
import ErrorModal from "../UI/ErrorModal";
const InsuranceList = (props) => {
  const [insurances, setInsurance] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/case1`)
      .then((res) => {
        setInsurance(res.data.offerList);
      })
      .catch((e) => {
        console.log(e);
        setError({
          title: "Someting went wrong",
          message: "Please check endpoint",
        });
      });
  }, []);

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} />}
      {insurances.map((ins, i) => (
        <Insurance key={i} insurances={ins}></Insurance>
      ))}
    </div>
  );
};

export default InsuranceList;
