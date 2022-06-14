import styles from './styles/Home.module.css'
import Language_box from '../components/Language_box/Language_box'
import InputLangBox from '../components/InputLangBox/Language_box'
import Navbar from '../components/Navbar/Navbar'
import { useState,useRef } from 'react'

export default function Home() {
    const [boxCount,setBoxCount] = useState(1)
    const [boxes, setBoxes] = useState(['l0'])
    const [fromLang, setFromLang] = useState('auto')
    const [fromContent, setFromContent] = useState('Hello there')

  const AddBox = () => {
        if(boxes.length >= 5){
            window.alert("Maximum 5 boxes allowed");
            return;
        }
        console.log(boxes)
        setBoxCount((boxCount) => boxCount + 1)
        setBoxes([...boxes, 'l'+boxCount])
  }

    const Delete = (e,box) => setBoxes(boxes.filter(b => b !== box))
    return (
        <div className={styles.app}>
            <Navbar AddBox={AddBox}/>

            {/* <button onClick={Delete('l1')}>Delete first</button> */}

            <div className={styles.Boxes}>
                <InputLangBox className={styles.input} language={fromLang} content={fromContent} setLanguage={setFromLang} setContent={setFromContent}/>
                {boxes.map((box) => <Language_box langFrom={fromLang} fromContent={fromContent} key={box} Delete={(e) => Delete(e,box)}/>)}
            </div>
        </div>
    )
}
