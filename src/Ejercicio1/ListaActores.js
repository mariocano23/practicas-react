import React, { useContext } from "react";
import './CSS/listaActores.css';
import { datosContexto } from "./DatosContexto";
function ListaActores(){

    const contexto = useContext(datosContexto);

    return(
    <React.Fragment>
        
        <ul id="listadoActores" onClick={ (event) => {
            if(event.target.tagName=="LI"){
                contexto.obtenActor(event.target.id);
            }
        }}>
            <h1>Actores</h1>
            {Object.keys(contexto.actores).legth>0 ?
                contexto.actores.map((info, index) =>{
                    return(
                        <li key={index} className="actor" id={info.value.url}>
                            {info.value.name}
                        </li>
                    )
                }): "No hay Actores."
            }
        </ul>
    </React.Fragment>
    );
}

export default ListaActores;