import styles from './styles/Home.module.css'
import Language_box from '../components/Language_box/Language_box'
import InputLangBox from '../components/InputLangBox/Language_box'
import Navbar from '../components/Navbar/Navbar'
import { useState,useEffect } from 'react'

export default function Home() {
    const [boxCount,setBoxCount] = useState(1)
    const [boxes, setBoxes] = useState(['l0'])
    const [fromLang, setFromLang] = useState('auto')
    const [fromContent, setFromContent] = useState('Hello there')
    const [z,setZ] = useState('l0')


    useEffect(() => {
      document.title = "Translate_It!";
    
      return () => {
        
      }
    }, [])
    

    const AddBox = () => {
            if(boxes.length >= 5){
                window.alert("Maximum 5 boxes allowed");
                return;
            }
            setBoxCount((boxCount) => boxCount + 1)
            setBoxes([...boxes, 'l'+boxCount])
            console.log(boxes)
    }

    const Delete = (e,box) => setBoxes(boxes.filter(b => b !== box))
    const handleZ = (e,box) => {
        setZ(box)
        console.log(z)
    }

    return (
        <div className={styles.app}>
            <Navbar AddBox={AddBox}/>

            {/* <button onClick={Delete('l1')}>Delete first</button> */}

            <div className={styles.Boxes}>
                <InputLangBox language={fromLang} content={fromContent} setLanguage={setFromLang} setContent={setFromContent}/>
                {boxes.map((box, i) => <Language_box  key={box} id={box} langFrom={fromLang} fromContent={fromContent} zind={(z==box)?"one":"zero"} Delete={(e) => Delete(e,box)} change={(e) => handleZ(e,box)}/>)}
            </div>
        </div>
    )
}
