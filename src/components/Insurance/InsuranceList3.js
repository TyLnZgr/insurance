import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchCount } from "../../redux/Insurances/insuranceSlice";
import Loader from "../UI/Loader";
import Insurance from "./Insurance";

const InsuranceList3 = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [insurances, setInsurances] = useState([]);
  const count = useSelector((state) => state.insurance.count);
  const dispatch = useDispatch();
  let i = 0;

  useEffect(() => {
    dispatch(fetchCount());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (i <= count) {
        i += 1;
        console.log(i);
      }
      if (i === count) {
        clearInterval(interval);
      }
    }, 1000);
  }, [i]);

  useEffect(() => {
    setIsLoading(true);
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/case3`)
      .then((res) => {
        setInsurances([...insurances, res.data]);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  }, [i]);
  const sortedRows = React.useMemo(
    () => [...insurances].sort((a, b) => a.Cash - b.Cash),
    [insurances]
  );
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {sortedRows.map((ins, i) => (
        <Insurance key={i} insurances={ins}></Insurance>
      ))}
    </>
  );
};

export default InsuranceList3;
