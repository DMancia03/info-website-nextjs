import Image from "next/image";
import React, {useId} from "react";
import CryptoData from '../data/crypto.json'
import Elemento from "@/components/Elemento";
import styles from "./page.module.css";
import CustomStyles from '../styles/elemento.module.css'

export default function Home() {
  const mainKey = useId();
  
  return (
    <main className={styles.main}>
      <div className={CustomStyles.title01}>
        <h1>FRAUDES DE CRIPTOMONEDA</h1>
      </div>
      {
        CryptoData.fraudes_cripto.map((value, index) => (<Elemento fraude={value} key={useId()}/>))
      }
    </main>
  );
}
