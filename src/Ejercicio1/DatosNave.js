import React, { useContext } from "react";
import { datosContexto } from "./DatosContexto";
import './CSS/datosNave.css'

function DatosNave() {

    const contexto = useContext(datosContexto);

    return(
    <React.Fragment>
        {Object.keys(contexto.nave).length>0 ?
            <div id="datosNave">
                <h1>{contexto.nave.name}</h1>
                <p>Modelo: {contexto.nave.model}</p>
                <p>Fabricante: {contexto.nave.manufacturer}</p>
                <p>Longitud: {contexto.nave.length}</p>
                <p>Precio en créditos:  {contexto.nave.cost_in_credits}</p>
            </div>: "No has seleccionado ningúna nave."
        } 
    </React.Fragment>
    )
}

export default DatosNave;