import React from "react";
import styles from "./card.module.css";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
const Card = () => {
  return (
    <div className={styles.container}>
      <MdOutlineSupervisedUserCircle size={24} />

      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.928</span>
        <span className={styles.detail}>
          {" "}
          <span className={styles.positive}>12% </span>  <span>more than previus week</span> 
          
          
          </span>
      </div>
    </div>
  );
};

export default Card;
