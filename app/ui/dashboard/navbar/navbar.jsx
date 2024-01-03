"use client";
import React from "react";
import style from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.title}> </div>
      <div className={style.menu}>
        <div className={style.search}>
          <MdSearch />
          <input className={style.input} type="text" placeholder="Search.." />
        </div>

        <div className={style.icons}>
           
            <MdOutlineChat size={20}/>

           <MdNotifications size={20}/>

           <MdPublic size={20}/>



        </div>


      </div>
    </div>
  );
};

export default Navbar;
