import React from "react";
import './CSS/listaPeliculas.css';
function ListaPeliculas(props){
    return(
    <React.Fragment>
        <ul id="listadoPeliculas" onClick={async (event) => {
            if(event.target.tagName=="LI"){
                props.funcion(event.target.id);
            }
        }}>
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