import React from "react";
import './CSS/Peliculero.css'

function Peliculero2(props) {
    return(
        <React.Fragment>
            <article className='Pelicula'>
                <h1>
                    <strong>{props.titulo}</strong> {/*He usado strong para resaltar el título.*/}
                </h1>
                <figure>
                    <img src={props.cartel}/>
                </figure>
                <p>
                    {props.children}
                </p>
            </article>
        </React.Fragment>
    );
}

export default Peliculero2;