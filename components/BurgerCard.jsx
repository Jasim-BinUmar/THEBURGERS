import React from "react";
import style from "../styles/PizzaCard.module.css";
import Image from "next/image";
import Link from "next/link";
const PizzaCard = ({ pizza }) => {
  return (
    <div className={style.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt=" " width="200" height="200" />
      </Link>
      <h1 className={style.title}>{pizza.title}</h1>
      <span className={style.price}>Rupee {pizza.prices[2]}</span>
      <p className={style.desc}>{pizza.desc} </p>
    </div>
  );
};

export default PizzaCard;
