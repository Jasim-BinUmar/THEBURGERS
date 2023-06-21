import styles from "../styles/OrderDetail.module.css";
import React from "react";
import { useState } from "react";

const OrderDetail = ({ setCash, total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <span onClick={() => setCash(false)} className={styles.close}>
            X
          </span>
          <h1 className={styles.title}>You will pay after delivery.</h1>
          <div className={styles.item}>
            <label className={styles.label}>Name Surname</label>
            <input
              placeholder="Enter your name"
              type="text"
              className={styles.input}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Phone Number</label>
            <input
              type="text"
              placeholder="+1 234 567 89"
              className={styles.input}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Address</label>
            <textarea
              rows={5}
              placeholder="Enter your address"
              type="text"
              className={styles.textarea}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button className={styles.button} onClick={handleClick}>
            Order
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
