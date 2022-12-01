import React from "react";
function ListaActores(props){
    return(
    <React.Fragment>
        <ul id="listadoActores" onClick={async (event) => {
            if(event.target.tagName=="LI"){
                props.funcion(event.target.id);
            }
        }}>
            {props.datos.legth!==0 ?
                props.datos.map((info, index) =>{
                    return(
                        <React.Fragment>
                            <li key={index} className="actor" id={info.value.url}>
                                {info.value.name}
                            </li>
                        </React.Fragment>
                    )
                }): "No hay Actores."
            
            }
        </ul>
    </React.Fragment>
    );
}

export default ListaActores;