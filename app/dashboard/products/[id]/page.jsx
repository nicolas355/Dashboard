import React from 'react'
import styles from '@/app/dashboard/products/singleProducts.module.css'
import Image from 'next/image'
import { fetchProduct } from '@/app/lib/data'
import { updateProduct } from '@/app/lib/actions'


const SingleProductsPage = async ({params}) => {

  const {id}=params

  const product=await fetchProduct(id);


  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>

        <div className={styles.imgContainer}>

        <Image src={product.img  || "/noavatar.png"} fill alt='imagen_avatar' />

        </div>

        {product.title}

        </div>

  

        <div className={styles.formContainer}>


            <form action={updateProduct} className={styles.form}>
            <input type="hidden" name='id' value={product._id} />
            <label>Title</label>
            <input type="text" name='title' placeholder={product.title} />

            <label>Price</label>
            <input type="number" name='price' placeholder={product.price} />

            <label>Stock</label>
            <input type="number" name='stock' placeholder={product.stock} />


            <label>Color</label>
            <input type="text" name='color' placeholder={product.color} />


            <label>Size</label>
    
            <textarea name="size" id="" cols="30" placeholder={product.size} ></textarea>

         

            <label htmlFor="">Cat</label>
            <select name="cat" id="cat">
                <option value="kitchen">kitchen</option>
                <option value="computers">Computers</option>
            </select>


    <label htmlFor="">Description</label>
        <textarea name="desc" id="desc"  rows="10" placeholder='Description'></textarea>

    <button>Update</button>


            </form>
            








        </div>


    </div>
  )
}

export default SingleProductsPage
