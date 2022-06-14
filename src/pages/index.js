import styles from './styles/Home.module.css'
import Language_box from '../components/Language_box/Language_box'
import InputLangBox from '../components/InputLangBox/Language_box'
import { useState,useRef } from 'react'

export default function Home() {
    const [boxCount,setBoxCount] = useState(1)
    const [boxes, setBoxes] = useState(['l0'])
    const [fromLang, setFromLang] = useState('auto')
    const [fromContent, setFromContent] = useState('Hello there')

  const AddBox = () => {
        if(boxes.length >= 5){
            window.alert("Maximum 5 children allowed");
            return;
        }
        console.log(boxes)
        setBoxCount((boxCount) => boxCount + 1)
        setBoxes([...boxes, 'l'+boxCount])
  }


    return (
        <div className={styles.app}>
            <h1>Translator</h1>
            <button className={styles.button} onClick={()=>AddBox()}>Add a box</button>

            <InputLangBox language={fromLang} content={fromContent} setLanguage={setFromLang} setContent={setFromContent}/>

            <div className={styles.Boxes}>
            {boxes.map((box) => <Language_box langFrom={fromLang} fromContent={fromContent} key={box}/>)}
            </div>
        </div>
    )
}
