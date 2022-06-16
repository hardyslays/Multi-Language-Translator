import {useEffect} from 'react'
import styles from './component.module.css'

function Input_box({content, setContent}) {

    return (
    <textarea className={styles.input} onChange={(e) => setContent(e.target.value)}>
        {content}
    </textarea>
  )
}

export default Input_box