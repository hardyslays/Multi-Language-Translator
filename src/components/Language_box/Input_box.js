import {useEffect} from 'react'
import styles from './component.module.css'

function Input_box({content, setContent, isInput}) {

    const handleChange = (e) => {
        if(!isInput)return;
        setContent(e.target.value);
    }

    return (
    <textarea className={styles.input} readOnly={!isInput} value={content} onChange={handleChange}>
    </textarea>
  )
}

export default Input_box