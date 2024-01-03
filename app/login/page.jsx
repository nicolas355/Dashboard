"use client"
import React from 'react'
import styles from './login.module.css'


const Login = () => {




  return (
    <div className={styles.container}>

      
<form  className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button type='submit'>Login</button>
 
    </form>


    </div>
  )
}

export default Login
