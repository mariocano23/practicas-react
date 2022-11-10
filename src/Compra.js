import React, { useState } from "react";

function Compra() {
    const datosInicalesLista = [];
    const datosInicalesFila = {
        id: "",
        nombre:"",
        descri:"",
        precio:0,
        cantidad:0,

    }

    const [lista,setLista]= useState(datosInicalesLista);
    const [fila,setFila]= useState(datosInicalesFila);

    function creaIds() {//Función que crea una ID aleatoria de 16 caracteres hexadecimales.
        var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
        let id="";
        for (let index = 0; index < 16; index++) {
            id+= letras[Math.floor(Math.random()*letras.length)];
        }
        return id;
    }

    const actualizarFila = (e) => {
        const { name, value } = e.target;
        setFila({ ...fila, [name]: value });
    }

    const  anyadirProducto = () => {
        setLista([...lista, fila]);
    }

    return(
        <React.Fragment>
            <form id="productoForm">
                <p>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" name="nombre" id="nombre" 
                    value={fila.nombre}
                    onChange={actualizarFila}/>
                </p>
                <p>
                <label htmlFor="descri">Descrición: </label>
                <input type="textarea" name="descri" id="descri" 
                    value={fila.descri}
                    onChange={actualizarFila}/>
                </p>
                <p>
                <label htmlFor="precio">Precio: </label>
                <input type="number" name="precio" id="precio" 
                    value={fila.precio}
                    onChange={actualizarFila}/>
                </p>
                <p>
                <label htmlFor="cantidad">Cantidad: </label>
                <input type="number" name="cantidad" id="cantidad" 
                    value={fila.cantidad}
                    onChange={actualizarFila}/>
                </p>
            </form>
            <button onClick={anyadirProducto}>Añadir a la lista</button>
            <ul>
                    {lista.map((fila) => {
                        return (
                        <React.Fragment>
                            <li  key={fila.id} >
                                <p>Nombre: {fila.nombre}</p>
                                <p>Descrición: {fila.descri}</p>
                                <p>Precio: {fila.precio}</p>
                                <p>cantidad: {fila.cantidad}</p>
                            </li>
                        </React.Fragment>)})   
                    }
                </ul>


        </React.Fragment>
    )
    
}

export default Compra;