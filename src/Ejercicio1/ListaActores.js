import React from "react";
import './CSS/listaActores.css';
function ListaActores(props){
    return(
    <React.Fragment>
        
        <ul id="listadoActores" onClick={ (event) => {
            if(event.target.tagName=="LI"){
                props.funcion(event.target.id);
            }
        }}>
            <h1>Actores</h1>
            {props.datos.legth!==0 ?
                props.datos.map((info, index) =>{
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