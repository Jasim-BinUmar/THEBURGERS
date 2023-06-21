import React from "react";
import style from "../styles/PizzaList.module.css";
import PizzaCard from "./BurgerCard";
const PizzaList = ({ pizzaList }) => {
  return (
    <div className={style.container}>
      <h1>THE BEST BURGERS IN TOWN</h1>
      <p className={style.desc}>
      
       FINE DINING CHEF BASED BURGERS - 
       CRAFT BEER AND COCKTAILS - 
       SPORTS BAR - 
       PRIVATE AND CORPORATE EVENTS AND PARTIES - 
       LATE NIGHT LOUNGE DJS - 
       FULL BAR LICENSE UNTIL 4AM - 
       BEST BURGER JOINT ZAGAT 2017 AND 2018, BEST BURGER TRIPADVISOR 2019 TO 2022 - 
       NEW YORK TIMES RATED
       
      </p>

      <div className={style.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
