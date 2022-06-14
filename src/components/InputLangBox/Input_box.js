import {useEffect} from 'react'
import styles from './component.module.css'

function Input_box({content, setContent}) {

    return (
    <textarea className={styles.input} value={content} onChange={(e) => setContent(e.target.value)}>
    </textarea>
  )
}

export default Input_box