import React, { useContext } from "react";
import './CSS/listaPeliculas.css';
import { datosContexto } from "./DatosContexto";
function ListaPeliculas(){

    const contexto = useContext(datosContexto);

    return(
    <React.Fragment>
        <ul id="listadoPeliculas" onClick={async (event) => {
            if(event.target.tagName=="LI"){
                contexto.obtenPelicula(event.target.id);
            }
        }}>
            {contexto.peliculas.legth!==0 ?
                contexto.peliculas.map((info, index) =>{
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