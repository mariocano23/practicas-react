import React from "react";
function ListaVehiculos(props){
    return(
    <React.Fragment>
        <h2>Vehículos</h2>
        <ul id="listadoVehiculos" onClick={ (event) => {
            if(event.target.tagName=="LI"){
                props.funcion(event.target.id);
            }
        }}>
            {props.datos.legth!==0 ?
                props.datos.map((info, index) =>{
                    return(
                        <li key={index} className="vehiculo" id={info.value.url}>
                            {info.value.name}
                        </li>
                    )
                }): "No hay Vehiculos."
            }
        </ul>
    </React.Fragment>
    );
}

export default ListaVehiculos;