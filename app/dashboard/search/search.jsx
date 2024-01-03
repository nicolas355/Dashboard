
"use client"
import React from 'react'
import styles from './search.module.css'
import { MdSearch } from 'react-icons/md'
import {  usePathname, useSearchParams,useRouter } from 'next/navigation'

import { useDebouncedCallback  } from 'use-debounce'


const Search = ({placeholder}) => {
  const searchParams=useSearchParams();
  const {replace}=useRouter();
  const pathname=usePathname();




  
  const handleSearch=useDebouncedCallback((e)=>{

    const params=new URLSearchParams(searchParams)

    params.set("page",1)


    
    // almacenamos el valor q = al valor de inputs
    if(e.target.value){

      
      e.target.value.length > 1 && params.set("q",e.target.value)


    

    }else{
      params.delete("q")
    }

    // actualizar
    replace(`${pathname}?${params}`)

  },300)

  return (
    <div className={styles.container}>
        

        <MdSearch/>
        <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
    </div>
  )
}

export default Search
