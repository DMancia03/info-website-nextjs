import React, {useId} from "react";

const FraudeCaracteristica = ({idFather, c}) => {
    const idFeature = idFather + c[0];
    return (
        <>
            <div key={idFeature}>
                <p>- {c[1]}</p>
            </div>
        </>
    )
}

export default FraudeCaracteristica