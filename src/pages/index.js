import styles from './styles/Home.module.css'
import Language_box from '../components/Language_box/Language_box'

export default function Home() {
  return (
    <div className={styles.app}>
        <Language_box/> 
    </div>
  )
}
