import React from 'react';
import './CSS/Cabecera.css';

function Cabecera(props){
    return(
        <React.Fragment>
        <header className='Cabecera'>
            <h1>{props.descri}</h1>
        </header>
        </React.Fragment>
    )
}

export default Cabecera;