import React from "react";

function ListaPeliculas(props){
    return(
    <React.Fragment>
        <ul id="listadoPeliculas">
            {props.datos.legth!==0 ?
                props.datos.map((info, index) =>{
                    return(
                        <li key={index} className="pelicula" id={info.url}>
                            {info.title}
                        </li>
                    )
                }): "No hay películas."
            
            }
        </ul>
    </React.Fragment>
    );
}

export default ListaPeliculas;