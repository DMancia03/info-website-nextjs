import React, {useId} from "react";
import Image from "next/image";
import FraudeCaracteristica from "./FraudeCaracteristica";
import FraudeStyles from '../styles/fraude.module.css'


const Fraude = ({fraude}) => {
    const idFraude = useId();
    
    return (
        <>
            <div className={FraudeStyles.fraudeCard} key={useId()}>
                <div className={FraudeStyles.fraudeCard_Title}>
                    <h2>{fraude.titulo}</h2>
                </div>
                <div className={FraudeStyles.fraudeCard_Description}>
                    <h4>Descripción:</h4>
                    <p>{fraude.descripcion}</p>
                </div>
                <div className={FraudeStyles.fraudeCard_Feature}>
                    <h4>Características:</h4>
                    {Object.entries(fraude.caracteristicas).map((value, index) => (<FraudeCaracteristica c={value}/>))}
                </div>
                <div className={FraudeStyles.fraudeCard_Image}>
                    <Image 
                        src={fraude.imagen_de_referencia}
                        width={200}
                        height={200}
                        alt={fraude.titulo}
                    />
                </div>
            </div>
        </>
    )
}

export default Fraude