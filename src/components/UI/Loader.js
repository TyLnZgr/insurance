import React from "react";
import styles from "./Loader.module.css";
import spinner from "../../assets/Loading_icon.gif";

const Loader = (props) => {
  return (
    <>
      <img src={spinner} className={styles.loading} alt="Loading" />
      {props.children}
    </>
  );
};

export default Loader;
