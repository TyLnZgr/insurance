import React from 'react';

import styles from './Insurance.module.css'

import Button from '../UI/Button';
import Card from '../UI/Card';

const Insurance =props=>{
    
    return(
        <Card className={styles.flex}>
            <div className={styles.flex}>
                <img className={styles.img} src={props.insurances.ImagePath}/>
                <div>
                    <h6 >{props.insurances.ProductDesc}</h6>
                    <h5>{props.insurances.FirmName}</h5>
                </div>
                
            </div>
            <div>
                {props.insurances.QuotaInfo.HasDiscount===false ?
                    <div>{props.insurances.Cash}</div>
                    : <div>
                        <span>Peşin</span><strike>{props.insurances.Cash}</strike>
                        <p>{Number((props.insurances.Cash - props.insurances.QuotaInfo.PremiumWithDiscount).toFixed(2))}</p>
                      </div>
                }
                <Button sale={props.insurances.SaleClosed}>{props.insurances.SaleClosed===true ? <span>SATIN AL</span>: <span>TELEFONDA SATIN AL</span>}</Button>
            </div>
        </Card>
    )
};

export default Insurance;