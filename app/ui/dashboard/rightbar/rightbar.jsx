import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    
    <>

    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            className={styles.bg}
            src={"/astronaut.png"}
            alt="Astronauta"
            fill
          />
        </div>

        <div className={styles.texts}>
          <span className={styles.notification}>Avisable Now</span>
          <h3 className={styles.title}>
            How to use the new Version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            excepturi. Sequi iure aut error reiciendis labore ea, nulla illo
            omnis.
          </p>

          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>


        


      </div>



      <div className={styles.item}>
      

        <div className={styles.texts}>
          <span className={styles.notification}>Comiing Soon</span>
          <h3 className={styles.title}>
            How to use the new Version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            excepturi. Sequi iure aut error reiciendis labore ea, nulla illo
            omnis.
          </p>

          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>


        


      </div>
      
    </div>
    

    
    
    </>

    





  );
};

export default Rightbar;
