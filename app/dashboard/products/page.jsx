

import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/dashboard/products/products.module.css'
import Search from '../search/search'
import Pagination from '../pagination/pagination'

import { fetchProducts } from '@/app/lib/data'
import { deleteProduct } from '@/app/lib/actions'

const ProductsPage = async ({searchParams}) => {

  const q=searchParams?.q || "";
  const page=searchParams?.page || 1;

  const {count,products}=await fetchProducts(q,page);


  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <Search placeholder="Search for a Products.." />

      <Link href="/dashboard/products/add">
        <button className={styles.addButton}>Add now</button>
      </Link>
    </div>

    <table className={styles.table}>
      <thead>


     

        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Created</td>
          <td>At stock</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
      {products.map((product)=>(
          
        
        <tr key={product._id}>
          <td>
            <div className={styles.product}>
              <Image
                className={styles.productImage}
                src={product.img  ||  '/noproduct.jpg'}
                alt="avatar"
                width={40}
                height={40}
              />
            {product.title}
            </div>
          </td>

          <td> {product.desc} </td>
          <td> {product.price} </td>
          <td> {product.createdAt.toString().slice(4,16)} </td>
          <td> {product.stock} </td>
          <td>
            <div className={styles.buttons}>
              <Link href={`/dashboard/products/${product.id}`}>
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>


                <form action={deleteProduct}>
              <input type="hidden" name="id" value={product._id} />
              <button className={`${styles.button} ${styles.delete}`}> Delete
              </button>
                </form>
               
            </div>
          </td>
        </tr>
          ))}
      </tbody>
    </table>


  
    <Pagination count={count}/>





  </div>
  )
}

export default ProductsPage
