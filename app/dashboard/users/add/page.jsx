import React from "react";
import styles from "@/app/dashboard/users/add/userAdd.module.css";
import { addUser } from "@/app/lib/actions";
const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="phone" placeholder="phone" name="phone" s />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>Is Admin?</option>

          <option value={true}>Yes</option>

          <option value={false}>No</option>

         
        </select>

        <select name="isActive" id="isActive">
          <option value={true} selected>Is Active?</option>

          <option value={true}>Yes</option>

          <option value={false}>No</option>

         
        </select>



  
        <textarea
          name="address"
          id="address"
          cols="16"
          placeholder="Address"
          rows="10"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;