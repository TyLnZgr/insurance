import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchInsurances } from "../../redux/Insurances/insuranceSlice";
import Insurance from "./Insurance";
import Loader from "../UI/Loader";

const InsuranceList2 = (props) => {
  const isLoading = useSelector((state) => state.insurance.isLoading);
  const insurances = useSelector((state) => state.insurance.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInsurances());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      {insurances.map((ins, i) => (
        <Insurance key={i} insurances={ins}></Insurance>
      ))}
    </div>
  );
};

export default InsuranceList2;
