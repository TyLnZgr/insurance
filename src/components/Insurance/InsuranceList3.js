import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../UI/Loader";
import Insurance from "./Insurance";

const InsuranceList3 = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [insurances, setInsurances] = useState([]);
  const [count, setCount] = useState();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/get_offer_count`).then(
      (res) => setCount(res.data.num_offers)
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/case3`)
      .then((res) => {
        setInsurances([res.data, ...insurances]);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  }, [count]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {insurances.map((ins, i) => (
        <Insurance key={i} insurances={ins}></Insurance>
      ))}
    </>
  );
};

export default InsuranceList3;
