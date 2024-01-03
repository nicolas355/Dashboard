import React from "react";
import styles from "@/app/ui/dashboard/products/AddProducts/addProducts.module.css";
import { addProduct } from "@/app/lib/actions";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct}  className={styles.form}>
        <input type="text" placeholder="title" name="title" />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>

          <option value="kitchen">Kitchen</option>

          <option value="phone">Phone</option>

          <option value="computer">Computer</option>
        </select>

        <input type="number" placeholder="price" name="price" />
        <input type="text" placeholder="stock" name="stock" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          name="desc"
          id="desc"
          cols="16"
          placeholder="Description"
          rows="10"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
