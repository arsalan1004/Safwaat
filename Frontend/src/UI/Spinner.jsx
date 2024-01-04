import React from 'react'
import styles from './spinner.module.css'
const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-1 fixed top-0 left-0 w-screen h-screen'>
       <div className={styles['loader']}>
       </div>
       <p className='text-secondary font-itim text-2xl'>Loading...</p>
    </div>
   
  )
}

export default Spinner