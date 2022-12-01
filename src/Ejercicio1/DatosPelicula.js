import React from "react";

function DatosPelicula(props) {
    return(
    <React.Fragment>
        <div id="pelicula">
            <h1>{props.datos.title}</h1>
            <p>{props.datos.opening_crawl}</p>
            <p>Director: {props.datos.director}</p>
            <p>Productor: {props.datos.producer}</p>
            <p>Fecha de salida:  {props.datos.release_date}</p>
        </div>
    </React.Fragment>
    )
}

export default DatosPelicula;