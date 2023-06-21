import React, { useState } from "react";
import style from "../../styles/Product.module.css";
import Image from "next/image";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ pizza }) => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(pizza.prices[0]);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const changePrice = (number) => {
    setPrice(price + number);
  };
  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };
  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras([...extras, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id != option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  };

  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.imgContainer}>
          <Image src={pizza.img} alt="" objectFit="contain" layout="fill" />
        </div>
      </div>
      <div className={style.right}>
        <h1 className={style.title}>{pizza.title}</h1>
        <span className={style.price}>PKR {price}</span>
        <p className={style.desc}>{pizza.desc}</p>
        <h3 className={style.choose}>Choose the size</h3>
        <div className={style.sizes}>
          <div className={style.size} onClick={() => handleSize(0)}>
            <span className={style.number}>Small</span>
          </div>
          <div className={style.size} onClick={() => handleSize(1)}>
            <span className={style.number}>Medium</span>
          </div>
          <div className={style.size} onClick={() => handleSize(2)}>
            <span className={style.number}>Large</span>
          </div>
        </div>
        <h3 className={style.choose}>Choose additional ingredients</h3>
        <div className={style.ingredients}>
          {pizza.extraOptions.map((option) => (
            <div className={style.option}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={style.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>
        <div className={style.add}>
          <input
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            type="number"
            defaultValue={1}
            className={style.quantity}
          />
          <button className={style.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
