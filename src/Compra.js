import React, { useState } from "react";
import './CSS/Compra.css';

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

    const actualizarFila = (e) => {//Función que actualiza el estado del producto.
        const { name, value } = e.target;
        setFila({ ...fila, [name]: value, id:creaIds()});
    }

    const  anyadirProducto = () => {//Función que añade un producto a la lista y actualiza su estado.
        if(!comprobarProducto()){
            setLista([...lista, fila]);
            setFila(datosInicalesFila);
        }
    }
    const comprobarProducto =() =>{//Función que comprueba el formulario del producto.
        let error=false;
        if (fila.nombre=="") {
            error=true;
        }else{
            if (fila.precio<=0) {
                error=true;
            }else{
                if (fila.cantidad<=0) {
                    error=true;
                }else{
                    
                }
            }
        }
        return error;
    }
    const  vaciarLista = () => {//Función que vacia la lista y actualiza su estado.
        setLista(datosInicalesLista);
    }
    const eliminarProducto =(nuevaFila) =>{//Función que elimina un producto de la lista y actualiza su estado.
        const nuevaLista = lista.filter((fila) => {
            return fila.id !== nuevaFila.id;
        });
        setLista(nuevaLista);
    }

    return(
        <React.Fragment>
            <div id="compra">
                <div id="formulario">
                        <form id="productoForm">
                        <p>
                        <label htmlFor="nombre">Nombre: </label><br/>
                        <input type="text" name="nombre" id="nombre" 
                            value={fila.nombre}
                            onChange={actualizarFila}/>
                        </p>
                        <p>
                        <label htmlFor="descri">Descripción: </label><br/>
                        <input type="textarea" name="descri" id="descri" 
                            value={fila.descri}
                            onChange={actualizarFila}/>
                        </p>
                        <p>
                        <label htmlFor="precio">Precio: </label><br/>
                        <input type="number" name="precio" id="precio" 
                            value={fila.precio}
                            onChange={actualizarFila}/>
                        </p>
                        <p>
                        <label htmlFor="cantidad">Cantidad: </label><br/>
                        <input type="number" name="cantidad" id="cantidad" 
                            value={fila.cantidad}
                            onChange={actualizarFila}/>
                        </p>
                    </form>
                    <button onClick={anyadirProducto}>Añadir a la lista</button>
                    <button onClick={vaciarLista}>Eliminar la lista</button>
                </div>
                <div id="lista">
                    <ul>
                        <li id="noProductos" className={lista[0]==undefined ? "": "oculto"}>No hay productos</li>
                        {lista.map((fila) => {
                            return (
                            <React.Fragment>
                                <li className="fila" key={fila.id} onClick={() => {
                                    eliminarProducto(fila);
                                }}>
                                    <p>ID: {fila.id}</p>
                                    <p>Nombre: {fila.nombre}</p>
                                    <p>Descripción: {fila.descri}</p>
                                    <p>Precio: {fila.precio}</p>
                                    <p>cantidad: {fila.cantidad}</p>
                                </li>
                            </React.Fragment>)})   
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
    
}

export default Compra;