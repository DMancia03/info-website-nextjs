import React, {useId} from "react";

const FraudeCaracteristica = ({c}) => {
    const idFeature = useId();

    return (
        <p key={idFeature}>- {c[1]}</p>
    )
}

export default FraudeCaracteristica