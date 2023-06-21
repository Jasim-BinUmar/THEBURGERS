import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
const about = () => {
  return (
    <div className={styles.container1}>
      <div className={styles.item1}>
        <Image src="/rest.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.aboutpara}>
        <div className={styles.card}>
          <h1 className={styles.head}>Our Products</h1>
          <p>
            The secret to success is much like the secret to making a better
            pizza – the more you put into it, the more you get out of it. Our
            pizza family is as hungry for perfection today as we were when we
            first opened our doors more than 30 years ago. And we’re driven to
            be the best at making innovative new products and recipes.We don’t
            use cheap and more processed ingredients. Whether it’s our signature
            sauce, toppings, our original fresh dough, or even the box itself,
            we invest in our ingredients to ensure that we always give you the
            finest quality pizza. For you, it’s not just a better pizza. It’s a
            family gathering, memorable birthday, work celebration or simply a
            great meal. It’s our goal to make sure you always have the best
            ingredients for every occasion.Our customer satisfaction must be
            consistent, quantifiable and demonstrable. At ZAIF we expect
            excellence – the “best in its class” in everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
