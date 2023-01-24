import React, { useContext } from "react";
import { datosContexto } from "./DatosContexto";

function DatosPelicula() {

    function formatearFecha(fecha){//Función que cambia el formato de una fecha al formato europeo.
        var date = new Date(fecha);
        return date.getDate()+"/"+(date.getMonth() + 1)+"/"+date.getFullYear();
    }

    const contexto = useContext(datosContexto);

    return(
    <React.Fragment>
        {Object.keys(contexto.pelicula).length>0 ? 
        <div id="pelicula">
            <h1>{contexto.pelicula.title}</h1>
            <p>{contexto.pelicula.opening_crawl}</p>
            <p>Director: {contexto.pelicula.director}</p>
            <p>Productor: {contexto.pelicula.producer}</p>
            <p>Fecha de salida:  {formatearFecha(contexto.pelicula.release_date)}</p>
        </div>
        : "No has seleccionado ningúna película."
        } 
    </React.Fragment>
    )
}

export default DatosPelicula;