import React, { useState } from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Featured = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const handleArrow = (direction) => {
    if (direction == "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction == "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  const images = ["/wallpaper.png", "/wallpaper2.jpg"];
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => {
          handleArrow("l");
        }}
      >
        <Image src="/arrowl.png" alt=" " layout="fill" objectFit="contain" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image
              src={img}
              className={styles.imgg}
              alt=" "
              layout="fill"
              objectFit="contain"
              onClick={() => {
                if (i === 0) {
                  router.push("/product/63c62992b31d271bafef38ee");
                }
                /*if (i === 2) {
                  router.push("/product/63ba69bab9052e396dd34c5b");
                }*/
              }}
            />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => {
          handleArrow("r");
        }}
      >
        <Image src="/arrowr.png" alt=" " layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
