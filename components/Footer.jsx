import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            THE Burger House.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND US</h1>
          <p className={styles.text}>
            Shop 12, D-Chowk , Blue Area
            <br />
            Islamabad - Pakistan
            <br /> 000 000-0000
          </p>
            
          
        </div>
        
      </div>

      <div className={styles.item}>
        <Image src="/footerimage.jpg" objectFit="cover" layout="fill" alt="" />
      </div>

    </div>
  );
};

export default Footer;
