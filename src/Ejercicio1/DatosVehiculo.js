import React from "react";
import './CSS/datosVehiculo.css';

function DatosVehiculo(props) {
    return(
    <React.Fragment>
        <div id="datosVehiculo">
            <h1>{props.datos.name}</h1>
            <p>Modelo: {props.datos.model}</p>
            <p>Fabricante: {props.datos.manufacturer}</p>
            <p>Longitud: {props.datos.length}</p>
            <p>Clase de vehículo:  {props.datos.vehicle_class}</p>
        </div>
    </React.Fragment>
    )
}

export default DatosVehiculo;