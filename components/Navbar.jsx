import React from "react";
import style from "../styles/Navbar.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
import PizzaList from "./PizzaList";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={style.container}>
      <div className={style.item}>
        <div className={style.callButton}>
          <Image src="/burgericon.png" width="32" height="32" />
        </div>
        <div className={style.texts}>
          <div className={style.text}>Burger House</div>
          
        </div>
      </div>

      <div className={style.item}>
        <ul className={style.list}>
          <Link href="/" passHref>
            <li className={style.listItem}>Home</li>
          </Link>

          <Link href="/products" passHref>
            <li className={style.listItem}>Burgers</li>
            {/* <BurgerList burgerList={burgerList} />*/}
          </Link>

          <li className={style.listImage}>
            <Link href="/" passHref>
              <Image src="/burgericon.png" width="77" height="85" />
            </Link>
          </li>
          <Link href="/contact" passHref>
            <li className={style.listItem}>Contact</li>
          </Link>
        </ul>
      </div>

      <Link href="/cart" passHref>
        <div className={style.item}>
          <div className={style.cart}>
            <Image src="/burger-cart.png" alt=" " width="32" height="32" />
          </div>
          <div className={style.counter}>{quantity}</div>
        </div>
      </Link>
    </div>
  );
};
export default Navbar;

/*
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
      BurgerList: products.data,

      admin,
    },
  };
};


*/
