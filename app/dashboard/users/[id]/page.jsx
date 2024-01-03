import React from 'react'
import styles from '@/app/dashboard/users/singleUser.module.css'
import Image from 'next/image'
import { fetchUser } from '@/app/lib/data'
import { updateUser } from '@/app/lib/actions'


const SingleUserPage = async ({params}) => {

  const {id}=params

  const user=await fetchUser(id);


  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>

        <div className={styles.imgContainer}>

        <Image src={user.img  || "/noavatar.png"} fill alt='imagen_avatar' />

        </div>
      {user.username}


        </div>


        <div className={styles.formContainer}>


            <form action={updateUser} className={styles.form}>
              <input type="hidden" name='id' value={user._id} />
            <label>UserName</label>
            <input type="text" name='username' placeholder={user.username} />

            <label>Email</label>
            <input type="email" name='email' placeholder={user.email} />

            <label>Password</label>
            <input type="password" name='password' placeholder={user.password} />


            <label>Phone</label>
            <input type="phone" name='phone' placeholder={user.phone} />


            <label>Address</label>
            <input type="text" name='address' placeholder={user.address} />

            <label htmlFor="">Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
                <option value={true} selected={user.isAdmin}>Yes</option>
                <option value={false} selected={!user.isAdmin}>No</option>
            </select>


    <label htmlFor="">Is Active?</label>
            <select name="isActive" id="isActive">
                <option value={true} selected={user.isActive} >Yes</option>
                <option value={false} selected={!user.isActive}>No</option>
            </select>

    <button>Update</button>


            </form>
            








        </div>


    </div>
  )
}

export default SingleUserPage
