import React from "react";
import './CSS/datosNave.css'

function DatosNave(props) {
    return(
    <React.Fragment>
        <div id="datosNave">
            <h1>{props.datos.name}</h1>
            <p>Modelo: {props.datos.model}</p>
            <p>Fabricante: {props.datos.manufacturer}</p>
            <p>Longitud: {props.datos.length}</p>
            <p>Precio en créditos:  {props.datos.cost_in_credits}</p>
        </div>
    </React.Fragment>
    )
}

export default DatosNave;