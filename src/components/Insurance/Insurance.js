import React from "react";

import styles from "./Insurance.module.css";

import Button from "../UI/Button";
import Card from "../UI/Card";

const Insurance = (props) => {
  return (
    <Card>
      <div className={styles.container}>
        <img
          className={styles.container__img}
          src={props.insurances.ImagePath}
          alt="logo"
        />
        <div>
          <h6 className={styles["container__text--bold"]}>
            {props.insurances.ProductDesc}
          </h6>
          <h6>{props.insurances.FirmName}</h6>
        </div>
        <div className={styles.container__item}>
          {props.insurances.QuotaInfo.HasDiscount === false ? (
            <p className={styles["container__text--bold"]}>
              {props.insurances.Cash} TL
            </p>
          ) : (
            <div>
              <span>Peşin</span>
              <strike>{props.insurances.Cash}TL</strike>
              <p className={styles["container__text--bold"]}>
                {props.insurances.QuotaInfo.PremiumWithDiscount}TL
              </p>
            </div>
          )}
        </div>
      </div>
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
    </Card>
  );
};

export default Insurance;
