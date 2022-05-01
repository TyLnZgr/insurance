import React from "react";
import Card from "./Card";
import styles from "../UI/ErrorModule.css";
const ErrorModal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className="styles.header">
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
    </Card>
  );
};

export default ErrorModal;
