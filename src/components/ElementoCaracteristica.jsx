import React, {useId} from "react";

const ElementoCaracteristica = ({c}) => {
    const idFeature = useId();

    return (
        <p key={idFeature}>- {c[1]}</p>
    )
}

export default ElementoCaracteristica