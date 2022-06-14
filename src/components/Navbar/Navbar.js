// import React from 'react'
import styles from "./Navbar.module.css"

function Navbar({AddBox}) {
  return (
    <div className={styles.Navbar}>
        <h1 className={styles.title}>Tranlate_It!</h1>
        <button className={styles.button} onClick={()=>AddBox()}>New language</button>
    </div>
  )
}

export default Navbar