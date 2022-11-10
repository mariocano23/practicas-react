import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contenedor from './Contenedor';
import Cabecera from './Cabecera';
import PiePagina from './PiePagina';
import Compra from './Compra';



function App() {
  return (
    <React.Fragment>
      <Contenedor>
        <Cabecera descri="Lista de la compra"/>
          <Compra></Compra>
        <PiePagina autor="Mario Cano" />
      </Contenedor>
    </React.Fragment>
    
  );
}

export default App;
