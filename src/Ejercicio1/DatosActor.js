import React, { useContext } from "react";
import { datosContexto } from "./DatosContexto";

function DatosActor() {

    const contexto = useContext(datosContexto);

    return(
    <React.Fragment>
        {Object.keys(contexto.actor).length>0 ? 
        <div id="datosActor">
            <p>{contexto.actor.name}</p>
            <p>Genero: {contexto.actor.gender}</p>
            <p>Altura: {contexto.actor.height}</p>
            <p>Peso: {contexto.actor.mass}</p>
            <p>Color de pelo:  {contexto.actor.hair_color}</p>
            <p>Color de ojos:  {contexto.actor.eye_color}</p>
        </div>
            : "No has seleccionado ningún actor."
        }
    </React.Fragment>
    )
}

export default DatosActor;