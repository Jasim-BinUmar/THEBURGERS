import React from "react";
import axios from "axios";
import style from "../styles/Home.module.css";
import PizzaCard from "../components/BurgerCard";
const products = ({ pizzaList }) => {
  return (
    <div className={style.productList}>
      <h1>Our Products</h1>
      <div className={style.productWrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default products;
export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const products = await axios.get("http://localhost:3000/api/products", {
    headers: {
      "Accept-Encoding": "application/json",
    },
  });
  return {
    props: {
      pizzaList: products.data,
      admin,
    },
  };
};
