import React, {useId} from "react";
import Image from "next/image";
import ElementoCaracteristica from "./ElementoCaracteristica";
import CustomStyles from '../styles/elemento.module.css'


const Elemento = ({fraude}) => {
    const idFraude = useId();

    return (
        <>
            <div className={CustomStyles.fraudeCard} key={idFraude}>
                <div className={CustomStyles.fraudeCard_Info}>
                    <div className={CustomStyles.fraudeCard_Title}>
                        <h2>{fraude.titulo}</h2>
                    </div>
                    <div className={CustomStyles.fraudeCard_Description}>
                        <h4>Descripción:</h4>
                        <p>{fraude.descripcion}</p>
                    </div>
                    <div className={CustomStyles.fraudeCard_Feature}>
                        <h4>Características:</h4>
                        <div>
                            {Object.entries(fraude.caracteristicas).map((value, index) => (<ElementoCaracteristica c={value} key={idFraude + value[0]}/>))}
                        </div>
                    </div>
                </div>
                <div className={CustomStyles.fraudeCard_Image}>
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

export default Elemento