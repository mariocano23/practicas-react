import React, { useState, useEffect } from "react";
import './App.css';
import { getDatosResults,getDatos } from "./Ejercicio1/Bibliotecas/bibliotecaGets";
import DatosActor from "./Ejercicio1/DatosActor";
import DatosPelicula from "./Ejercicio1/DatosPelicula";
import ListaActores from "./Ejercicio1/ListaActores";
import ListaPeliculas from "./Ejercicio1/ListaPeliculas";
import ListaNaves from "./Ejercicio1/ListaNaves";
import ListaVehiculos from "./Ejercicio1/ListaVehiculos";
import DatosVehiculo from "./Ejercicio1/DatosVehiculo";
import DatosNave from "./Ejercicio1/DatosNave";



function App() {
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

    const obtenPeliculas = async (enlace) =>  {
        let datos = await getDatosResults(enlace);
        setPeliculas(datos);
    }

    const obtenPelicula = async (enlace) =>  {
        let datos = await getDatos(enlace);
        setPelicula(datos);
        obtenActores(datos.characters.slice(0,9));
        setActor(datosIncialObjeto);
        setNaves(datosIncialArray);
        setNave(datosIncialObjeto);
        setVehiculos(datosIncialArray);
        setVehiculo(datosIncialObjeto);
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
    const obtenNaves = async (array) => {
        let promesasNaves = array.map((naves) =>{
            return getDatos(naves);
        }
        );
        let valoresNaves = await Promise.allSettled(promesasNaves);
        setNaves(valoresNaves);
    }
    const obtenVehiculos = async (array) => {
        let promesasVehiculos = array.map((vehiculos) =>{
            return getDatos(vehiculos);
        }
        );
        let valoresVehiculos = await Promise.allSettled(promesasVehiculos);
        setVehiculos(valoresVehiculos);
    }

    const obtenActor = async (enlace) =>  {
        let datos = await getDatos(enlace);
        setActor(datos);
        obtenNaves(datos.starships);
        obtenVehiculos(datos.vehicles);
        setNave(datosIncialObjeto);
        setVehiculo(datosIncialObjeto);

    }
    const obtenNave = async (enlace) =>  {
        let datos = await getDatos(enlace);
        setNave(datos);
    }
    const obtenVehiculo = async (enlace) =>  {
        let datos = await getDatos(enlace);
        setVehiculo(datos);
    }

    useEffect(()=>{
        obtenPeliculas(url);
    },[]);

    return(
        <React.Fragment>
            <div id="contenedor">
                <div id="listaPelis">
                <ListaPeliculas datos={peliculas} funcion={obtenPelicula}/>
                </div>
                <div id="infoPeli">
                {Object.keys(pelicula).length>0 ? 
                    <DatosPelicula datos={pelicula}/>
                    : "No has seleccionado ningúna película."
                } 
                    
                </div>
                <div id="listaActores">
                    <ListaActores datos={actores} funcion={obtenActor}/>
                </div>
                <div id="infoActor">
                {Object.keys(actor).length>0 ? 
                    <React.Fragment>
                        <DatosActor datos={actor}/>
                        <div id="naves">
                            <ListaNaves datos={naves} funcion={obtenNave}/>
                        </div>
                        <div id="vehiculos">
                            <ListaVehiculos datos={vehiculos} funcion={obtenVehiculo}/>
                        </div>
                    </React.Fragment>
                    : "No has seleccionado ningún actor."
                } 
                    
                </div>
                <div id="naveVehiculo">
                <div id="infoNave">
                {Object.keys(nave).length>0 ?
                    <DatosNave datos={nave}/>
                    : "No has seleccionado ningúna nave."
                } 
                </div>
                <div id="infoVehiculo">
                {Object.keys(vehiculo).length>0 ?
                    <DatosVehiculo datos={vehiculo}/>
                    : "No has seleccionado ningún vehículo."
                } 
                </div>
                </div>
            </div>  
        </React.Fragment>
    )

}

export default App;
