import Image from "next/image";
import CryptoData from '../data/crypto.json'
import Fraude from "@/components/Fraude";
import styles from "./page.module.css";
import FraudeStyles from '../styles/fraude.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={FraudeStyles.title01}>
        <h1>FRAUDES DE CRIPTOMONEDA</h1>
      </div>
      {
        CryptoData.fraudes_cripto.map((value, index) => (<Fraude fraude={value}/>))
      }
    </main>
  );
}
