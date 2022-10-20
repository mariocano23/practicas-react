import React from "react";

function Contenedor(props) {
    return(
        <React.Fragment>
            <wrapper>
                {props.children}
            </wrapper>
        </React.Fragment>
    )
}

export default Contenedor;