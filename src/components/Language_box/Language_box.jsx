import {useState, useEffect} from 'react'
import Input_box from './Input_box'
import styles from './component.module.css'
import Draggable from 'react-draggable'

const Language_box = ({langFrom, fromContent, Delete},...props) => {
    const [language, setLanguage] = useState('en')
    const [content,setContent] = useState('Hello there good sir')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://lingva.ml/api/v1/${langFrom}/${language}/${fromContent}`)
        .then(res => res.json())
        .then(data => setContent(data.translation))
        .catch(err => console.log(err)) 
    }

    useEffect(() => {
        console.log(Delete)
        fetch(`https://lingva.ml/api/v1/${langFrom}/${language}/${fromContent}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.translation)
            setContent(data.translation)
        })
        .catch(err => console.log(err))
    }, [langFrom, fromContent,language])

    const langOpt = [
        {"code":"auto","name":"Detect"},{"code":"af","name":"Afrikaans"},{"code":"sq","name":"Albanian"},{"code":"am","name":"Amharic"},{"code":"ar","name":"Arabic"},{"code":"hy","name":"Armenian"},{"code":"az","name":"Azerbaijani"},{"code":"eu","name":"Basque"},{"code":"be","name":"Belarusian"},{"code":"bn","name":"Bengali"},{"code":"bs","name":"Bosnian"},{"code":"bg","name":"Bulgarian"},{"code":"ca","name":"Catalan"},{"code":"ceb","name":"Cebuano"},{"code":"ny","name":"Chichewa"},{"code":"zh","name":"Chinese"},{"code":"zh_HANT","name":"Chinese (Traditional)"},{"code":"co","name":"Corsican"},{"code":"hr","name":"Croatian"},{"code":"cs","name":"Czech"},{"code":"da","name":"Danish"},{"code":"nl","name":"Dutch"},{"code":"en","name":"English"},{"code":"eo","name":"Esperanto"},{"code":"et","name":"Estonian"},{"code":"tl","name":"Filipino"},{"code":"fi","name":"Finnish"},{"code":"fr","name":"French"},{"code":"fy","name":"Frisian"},{"code":"gl","name":"Galician"},{"code":"ka","name":"Georgian"},{"code":"de","name":"German"},{"code":"el","name":"Greek"},{"code":"gu","name":"Gujarati"},{"code":"ht","name":"Haitian Creole"},{"code":"ha","name":"Hausa"},{"code":"haw","name":"Hawaiian"},{"code":"iw","name":"Hebrew"},{"code":"hi","name":"Hindi"},{"code":"hmn","name":"Hmong"},{"code":"hu","name":"Hungarian"},{"code":"is","name":"Icelandic"},{"code":"ig","name":"Igbo"},{"code":"id","name":"Indonesian"},{"code":"ga","name":"Irish"},{"code":"it","name":"Italian"},{"code":"ja","name":"Japanese"},{"code":"jw","name":"Javanese"},{"code":"kn","name":"Kannada"},{"code":"kk","name":"Kazakh"},{"code":"km","name":"Khmer"},{"code":"rw","name":"Kinyarwanda"},{"code":"ko","name":"Korean"},{"code":"ku","name":"Kurdish (Kurmanji)"},{"code":"ky","name":"Kyrgyz"},{"code":"lo","name":"Lao"},{"code":"la","name":"Latin"},{"code":"lv","name":"Latvian"},{"code":"lt","name":"Lithuanian"},{"code":"lb","name":"Luxembourgish"},{"code":"mk","name":"Macedonian"},{"code":"mg","name":"Malagasy"},{"code":"ms","name":"Malay"},{"code":"ml","name":"Malayalam"},{"code":"mt","name":"Maltese"},{"code":"mi","name":"Maori"},{"code":"mr","name":"Marathi"},{"code":"mn","name":"Mongolian"},{"code":"my","name":"Myanmar (Burmese)"},{"code":"ne","name":"Nepali"},{"code":"no","name":"Norwegian"},{"code":"or","name":"Odia (Oriya)"},{"code":"ps","name":"Pashto"},{"code":"fa","name":"Persian"},{"code":"pl","name":"Polish"},{"code":"pt","name":"Portuguese"},{"code":"pa","name":"Punjabi"},{"code":"ro","name":"Romanian"},{"code":"ru","name":"Russian"},{"code":"sm","name":"Samoan"},{"code":"gd","name":"Scots Gaelic"},{"code":"sr","name":"Serbian"},{"code":"st","name":"Sesotho"},{"code":"sn","name":"Shona"},{"code":"sd","name":"Sindhi"},{"code":"si","name":"Sinhala"},{"code":"sk","name":"Slovak"},{"code":"sl","name":"Slovenian"},{"code":"so","name":"Somali"},{"code":"es","name":"Spanish"},{"code":"su","name":"Sundanese"},{"code":"sw","name":"Swahili"},{"code":"sv","name":"Swedish"},{"code":"tg","name":"Tajik"},{"code":"ta","name":"Tamil"},{"code":"tt","name":"Tatar"},{"code":"te","name":"Telugu"},{"code":"th","name":"Thai"},{"code":"tr","name":"Turkish"},{"code":"tk","name":"Turkmen"},{"code":"uk","name":"Ukrainian"},{"code":"ur","name":"Urdu"},{"code":"ug","name":"Uyghur"},{"code":"uz","name":"Uzbek"},{"code":"vi","name":"Vietnamese"},{"code":"cy","name":"Welsh"},{"code":"xh","name":"Xhosa"},{"code":"yi","name":"Yiddish"},{"code":"yo","name":"Yoruba"},{"code":"zu","name":"Zulu"}
    ];

  return (
    <Draggable bounds="parent">
        <div className={styles.container}>
            <div className={styles.input_field}>
                <label htmlFor='language'>Language</label>
                <select id='language' value={language} onChange={(e)=>setLanguage(e.target.value)}>
                    {
                        langOpt.map((lang,index) => <option key={index} value={lang["code"]}>{lang["name"]}</option>)
                    }
                </select>
                <button onClick={Delete}>Delete</button>
            </div>
            <Input_box content={content} setContent={setContent}/>
        </div>
    </Draggable>
  )
}

export default Language_box