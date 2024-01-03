import React from 'react'
import Image from 'next/image'
import styles from './transactions.module.css'
const Transaction = () => {
  return (
    <div className={styles.container}>
     <h2 className={styles.title}>Latest Transactions</h2>
    <table className={styles.table} >


<thead>
  <tr>

    <td>Name</td>
    <td>Status</td>
    <td>Date</td>
    <td>Amout</td>


  </tr>
</thead>
<tbody>

  <tr>
    <td>
    <div className={styles.user} >

<Image src="/noavatar.png" width={40} height={40} className={styles.userImage} />
</div>
      Richard Cloes

    </td>
    <td>
      <span className={`${styles.status} ${styles.pending}`} >Pending</span>
    </td>
    <td>14.02.2024</td>
    <td>$2200</td>
  </tr>


  <tr>
    <td>
    <div className={styles.user} >

<Image src="/noavatar.png" width={40} height={40} className={styles.userImage} />
</div>
Bastian Stephe
    </td>
    <td>
      <span className={`${styles.status} ${styles.done}`} >Done</span>
    </td>
    <td>14.02.2024</td>
    <td>$8750</td>
  </tr>

  
  <tr>
    <td>
      <div className={styles.user} >

      <Image src="/noavatar.png" width={40} height={40} className={styles.userImage} />
      </div>
        Malcon Taylor

    </td>
    <td>
      <span className={`${styles.status} ${styles.cancelled}`} >Cancelled</span>
    </td>
    <td>14.02.2024</td>
    <td>$3200</td>
  </tr>









</tbody>




    </table>



    </div>
  )
}

export default Transaction
