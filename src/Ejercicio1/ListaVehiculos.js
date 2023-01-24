import React, { useContext } from "react";
import { datosContexto } from "./DatosContexto";

function ListaVehiculos(){

    const contexto = useContext(datosContexto);

    return(
    <React.Fragment>
        <h2>Vehículos</h2>
        <ul id="listadoVehiculos" onClick={ (event) => {
            if(event.target.tagName=="LI"){
                contexto.obtenVehiculo(event.target.id);
            }
        }}>
            {contexto.vehiculos.legth!==0 ?
                contexto.vehiculos.map((info, index) =>{
                    return(
                        <li key={index} className="vehiculo" id={info.value.url}>
                            {info.value.name}
                        </li>
                    )
                }): ""
            }
        </ul>
    </React.Fragment>
    );
}

export default ListaVehiculos;