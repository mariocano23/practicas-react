import React, { useState, useEffect } from "react";
import { getDatosResults,getDatos } from "./Bibliotecas/bibliotecaGets";
import DatosActor from "./DatosActor";
import DatosPelicula from "./DatosPelicula";
import ListaActores from "./ListaActores";
import ListaPeliculas from "./ListaPeliculas";

function Peliculas(){
    const url = "http://swapi.py4e.com/api/films";
    const datosIncialArray=[];
    const datosIncialObjeto={};

    const [peliculas, setPeliculas] = useState(datosIncialArray);
    const [pelicula, setPelicula] = useState(datosIncialObjeto);
    const [actores, setActores] = useState(datosIncialArray);
    const [actor, setActor] = useState(datosIncialArray);

    const obtenPeliculas = async (enlace) =>  {
        let datos = await getDatosResults(enlace);
        setPeliculas(datos);
    }

    const obtenPelicula = async (enlace) =>  {
        let datos = await getDatos(enlace);
        setPelicula(datos);
        obtenActores(datos.characters.slice(0,9));
    }
    const obtenActores = async (array) => {
        let promesasActores = array.map((actores,index) =>{
            if (index<=9) {
                return getDatos(actores);
            }
        }
        );
        let valoresActores = await Promise.allSettled(promesasActores);
        setActores(valoresActores);
    }

    const obtenActor = async (enlace) =>  {
        let datos = await getDatos(enlace);
        setActor(datos);
    }

    useEffect(()=>{
        obtenPeliculas(url);
    },[]);

    return(
        <React.Fragment>
            <div id="listaPelis">
            <ListaPeliculas datos={peliculas} funcion={obtenPelicula}/>
            </div>
            <div id="infoPeli">
                <DatosPelicula datos={pelicula}/>
            </div>
            <div id="listaActores">
                <ListaActores datos={actores} funcion={obtenActor}/>
            </div>
            <div id="infoActor">
                <DatosActor datos={actor}/>
            </div>
        </React.Fragment>
    )

}

export default Peliculas;