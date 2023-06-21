import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import AdminPageButton from "../components/AdminPageButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>BURGER Restaurant in Pakistan</title>
        <meta name="description" content="Best BURGER shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
     
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
      <div className={styles.buts}>
        {admin && <AddButton setClose={setClose} />}
        {admin && <AdminPageButton />}
      </div>
    </div>
  );
}

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
