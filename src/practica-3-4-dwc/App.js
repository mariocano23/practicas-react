import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contenedor from './Contenedor';
import Cabecera from './Cabecera';
import Peliculero2 from './Peliculero2';
import PiePagina from './PiePagina';
import InfoExtra from './InfoExtra';
import peliculas from './peliculas.json';

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
