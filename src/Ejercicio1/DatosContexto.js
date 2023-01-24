import React, { useState, createContext, useEffect } from "react";
import { getDatosResults,getDatos } from "./Bibliotecas/bibliotecaGets";
// Se crea el contexto general.
const datosContexto = createContext();

const DatosContexto = (props) => {

    const url = "http://swapi.py4e.com/api/films";
    const datosIncialArray=[];
    const datosIncialObjeto={};

    const [peliculas, setPeliculas] = useState(datosIncialArray);
    const [pelicula, setPelicula] = useState(datosIncialObjeto);
    const [actores, setActores] = useState(datosIncialArray);
    const [actor, setActor] = useState(datosIncialObjeto);
    const [naves, setNaves] = useState(datosIncialArray);
    const [nave, setNave] = useState(datosIncialObjeto);
    const [vehiculos, setVehiculos] = useState(datosIncialArray);
    const [vehiculo, setVehiculo] = useState(datosIncialObjeto);

    const obtenPeliculas = async (enlace) =>  {//Función que cambia el estado de peliculas.
        let datos = await getDatosResults(enlace);
        setPeliculas(datos);
    }

    const obtenPelicula = async (enlace) =>  {//Función que cambia el estado de pelicula y reincia el de actores, actor, naves, nave, vehiculos y vehiculo.
        let datos = await getDatos(enlace);
        setPelicula(datos);
        obtenActores(datos.characters.slice(0,9));
        setActor(datosIncialObjeto);
        setNaves(datosIncialArray);
        setNave(datosIncialObjeto);
        setVehiculos(datosIncialArray);
        setVehiculo(datosIncialObjeto);
    }
    const obtenActores = async (array) => {//Función que cambia el estado de actores.
        let promesasActores = array.map((actores,index) =>{
            if (index<=9) {
                return getDatos(actores);
            }
        }
        );
        let valoresActores = await Promise.allSettled(promesasActores);
        setActores(valoresActores);
    }
    const obtenNaves = async (array) => {//Función que cambia el estado de naves.
        let promesasNaves = array.map((naves) =>{
            return getDatos(naves);
        }
        );
        let valoresNaves = await Promise.allSettled(promesasNaves);
        setNaves(valoresNaves);
    }
    const obtenVehiculos = async (array) => {//Función que cambia el estado de vehiculos.
        let promesasVehiculos = array.map((vehiculos) =>{
            return getDatos(vehiculos);
        }
        );
        let valoresVehiculos = await Promise.allSettled(promesasVehiculos);
        setVehiculos(valoresVehiculos);
    }

    const obtenActor = async (enlace) =>  {//Función que cambia el estado de actor, naves y vehiculos y reinicia el de nave y vehiculo.
        let datos = await getDatos(enlace);
        setActor(datos);
        obtenNaves(datos.starships);
        obtenVehiculos(datos.vehicles);
        setNave(datosIncialObjeto);
        setVehiculo(datosIncialObjeto);

    }
    const obtenNave = async (enlace) =>  {//Función que cambia el estado de nave.
        let datos = await getDatos(enlace);
        setNave(datos);
    }
    const obtenVehiculo = async (enlace) =>  {//Función que cambia el estado de vehiculo.
        let datos = await getDatos(enlace);
        setVehiculo(datos);
    }

    useEffect(()=>{//Este useEffect ejecuta la función "obtenPeliculas" al iniciar la página.
        obtenPeliculas(url);
    },[]);

    const datos = {obtenActor, obtenActores, obtenNave, obtenNaves, obtenPelicula, obtenPeliculas, obtenVehiculo, obtenVehiculos, peliculas, pelicula, actores, actor, naves, nave, vehiculos, vehiculo};

return (
    // Se crea el proveedor del contexto a través del children.
    <datosContexto.Provider value={datos}>
      {props.children}
    </datosContexto.Provider>
  );
};

export default DatosContexto;
// ¡¡¡Importante!!!
// Hay que exportar el contexto para que pueda ser utilizado.
export { datosContexto };