import {useEffect} from 'react'
import styles from './component.module.css'

function Input_box({content, setContent}) {

    // const handleChange = (e) => {
    //     if(!isInput)return;
    //     setContent(e.target.value);
    // }

    return (
    <textarea className={styles.input} readOnly={true} value={content}>
    </textarea>
  )
}

export default Input_box