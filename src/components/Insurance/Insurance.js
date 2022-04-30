import React from "react";

import styles from "./Insurance.module.css";

import Button from "../UI/Button";
import Card from "../UI/Card";

const Insurance = (props) => {
  return (
    <Card className={styles.flex}>
      <div className={`${styles.flex} ${styles.center}`}>
        <img className={styles.img} src={props.insurances.ImagePath} />
        <div>
          <h6 className={styles["text-bold"]}>
            {props.insurances.ProductDesc}
          </h6>
          <h6>{props.insurances.FirmName}</h6>
        </div>
      </div>
      <div className={styles.flex2}>
        {props.insurances.QuotaInfo.HasDiscount === false ? (
          <p className={styles["text-bold"]}>{props.insurances.Cash} TL</p>
        ) : (
          <div>
            <span>Peşin</span>
            <strike>{props.insurances.Cash}TL</strike>
            <p className={styles["text-bold"]}>
              {props.insurances.QuotaInfo.PremiumWithDiscount}TL
            </p>
          </div>
        )}
        <Button
          className={
            props.insurances.SaleClosed === true
              ? styles.btn__true
              : styles.btn__false
          }
        >
          {props.insurances.SaleClosed === true ? (
            <span>SATIN AL</span>
          ) : (
            <span>TELEFONDA SATIN AL</span>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default Insurance;
