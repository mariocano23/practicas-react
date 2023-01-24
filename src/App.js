import React from "react";
import './App.css';
import DatosActor from "./Ejercicio1/DatosActor";
import DatosPelicula from "./Ejercicio1/DatosPelicula";
import ListaActores from "./Ejercicio1/ListaActores";
import ListaPeliculas from "./Ejercicio1/ListaPeliculas";
import ListaNaves from "./Ejercicio1/ListaNaves";
import ListaVehiculos from "./Ejercicio1/ListaVehiculos";
import DatosVehiculo from "./Ejercicio1/DatosVehiculo";
import DatosNave from "./Ejercicio1/DatosNave";
import DatosContexto from "./Ejercicio1/DatosContexto";



function App() {
  

    return(
        <React.Fragment>
            <div id="contenedor">
                <DatosContexto>
                <div id="listaPelis">
                    <ListaPeliculas />
                </div>
                <div id="infoPeli">
                     
                    <DatosPelicula/>
                    
                </div>
                <div id="listaActores">
                    <ListaActores/>
                </div>
                <div id="infoActor">
                    
                        
                    <DatosActor />
                    <div id="naves">
                        <ListaNaves />
                    </div>
                    <div id="vehiculos">
                        <ListaVehiculos />
                    </div>
                        
                    
                </div>
                <div id="naveVehiculo">
                    <h2>Nave</h2>
                <div id="infoNave">
                    
                        <DatosNave />
                        
                     
                </div>
                    <h2>Vehículo</h2>
                    <div id="infoVehiculo">
                   
                        <DatosVehiculo />
                       
                    </div>
                </div>
                </DatosContexto>
            </div>  
        </React.Fragment>
    )

}

export default App;
