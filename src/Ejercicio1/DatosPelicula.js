import React from "react";

function DatosPelicula(props) {

    function formatearFecha(fecha){//Función que cambia el formato de una fecha al formato europeo.
        var date = new Date(fecha);
        return date.getDate()+"/"+(date.getMonth() + 1)+"/"+date.getFullYear();
    }

    return(
    <React.Fragment>
        <div id="pelicula">
            <h1>{props.datos.title}</h1>
            <p>{props.datos.opening_crawl}</p>
            <p>Director: {props.datos.director}</p>
            <p>Productor: {props.datos.producer}</p>
            <p>Fecha de salida:  {formatearFecha(props.datos.release_date)}</p>
        </div>
    </React.Fragment>
    )
}

export default DatosPelicula;