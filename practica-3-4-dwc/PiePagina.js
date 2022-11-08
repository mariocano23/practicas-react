import React from 'react';
import './CSS/PiePagina.css';

function PiePagina(props){
    return(
        <React.Fragment>
            <footer className='PiePagina'><p>Página creada por {props.autor}. 2022</p></footer>
        </React.Fragment>
    )
}

export default PiePagina;