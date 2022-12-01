import React from "react";

function DatosActor(props) {
    return(
    <React.Fragment>
        <div id="datosActor">
            <p>{props.datos.name}</p>
            <p>Genero: {props.datos.gender}</p>
            <p>Altura: {props.datos.height}</p>
            <p>Peso: {props.datos.mass}</p>
            <p>Color de pelo:  {props.datos.hair_color}</p>
            <p>Color de ojos:  {props.datos.eye_color}</p>
        </div>
    </React.Fragment>
    )
}

export default DatosActor;