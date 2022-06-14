import styles from './styles/Home.module.css'
import Language_box from '../components/Language_box/Language_box'
import { useRef } from 'react'

export default function Home() {

  const AddBox = () => {

  }


  return (
    <div className={styles.app}>
      <h1>Translator</h1>

      <button className={styles.button} onClick={()=>AddBox()}>Add a box</button>

      <div className={styles.Boxes}>
        <Language_box/>
      </div>
    </div>
  )
}
