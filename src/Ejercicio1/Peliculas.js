import React, { useState, useEffect } from "react";
import { getDatosResults,getDatos } from "./Bibliotecas/bibliotecaGets";
import DatosPelicula from "./DatosPelicula";
import ListaPeliculas from "./ListaPeliculas";

function Peliculas(){
    const url = "http://swapi.py4e.com/api/films";
    const datosIncialArray=[];
    const datosIncialObjeto={};

    const [peliculas, setPeliculas] = useState(datosIncialArray);
    const [pelicula, setPelicula] = useState(datosIncialObjeto);

    const obtenPeliculas = async () =>  {
        let datos = await getDatosResults(url);
        setPeliculas(datos);
    }

    useEffect(()=>{
        obtenPeliculas(url);
    },[]);

    return(
        <React.Fragment>
            <ListaPeliculas datos={peliculas}></ListaPeliculas>
            <DatosPelicula></DatosPelicula>
        </React.Fragment>
    )

}

export default Peliculas;