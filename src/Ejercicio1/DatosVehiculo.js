import React, { useContext } from "react";
import { datosContexto } from "./DatosContexto";
import './CSS/datosVehiculo.css';

function DatosVehiculo() {

    const contexto = useContext(datosContexto);

    return(
    <React.Fragment>
        {Object.keys(contexto.vehiculo).length>0 ?
            <div id="datosVehiculo">
                <h1>{contexto.vehiculo.name}</h1>
                <p>Modelo: {contexto.vehiculo.model}</p>
                <p>Fabricante: {contexto.vehiculo.manufacturer}</p>
                <p>Longitud: {contexto.vehiculo.length}</p>
                <p>Clase de vehículo:  {contexto.vehiculo.vehicle_class}</p>
            </div>
            : "No has seleccionado ningún vehículo."
        } 
    </React.Fragment>
    )
}

export default DatosVehiculo;