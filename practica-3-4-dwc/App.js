import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contenedor from './practica-3-4-dwc/Contenedor';
import Cabecera from './practica-3-4-dwc/Cabecera';
import Peliculero2 from './practica-3-4-dwc/Peliculero2';
import PiePagina from './practica-3-4-dwc/PiePagina';
import InfoExtra from './practica-3-4-dwc/InfoExtra';
import peliculas from './practica-3-4-dwc/peliculas.json';

function App() {
  return (
    <React.Fragment>
      <Contenedor>
      <Cabecera descri="Página de Películas"/>
                {peliculas["peliculas"].map((v) =>{
                    return(
                      <React.Fragment>
                        <Peliculero2 titulo={v.nombre}
                        cartel={v.cartelera}
                        >
                            {v.resumen}
                        </Peliculero2>

                        <InfoExtra extra={v.director} elenco={v.elenco}/>
                      </React.Fragment>
                    );
                })}
                
            <PiePagina autor="Mario Cano"/>
      </Contenedor>
    </React.Fragment>
    
  );
}

export default App;
