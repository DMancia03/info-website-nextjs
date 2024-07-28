import React, {useId} from "react";

const ElementoCaracteristica = ({c}) => {
    const idFeature = useId();

    return (
        <>
            <p>- {c.Fecha}</p>
            <p>- {c.Impacto}</p>
            <p>- {c.Modus_operandi}</p>
        </>
    )
}

export default ElementoCaracteristica