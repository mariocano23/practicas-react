"use strict";

const getDatosResults = (fuente) => {//Función que recoge un url de una API procesa una promesa y devuelve el result de los datos obtenidos.

  return fetch(fuente)
    .then((respuesta) => {
      return respuesta.json(); 
    })
    .then((datos) => {
      return datos.results; 
    })
    .catch((error) => {
      console.error(error); 
    });
};

const getDatos = (fuente) => {//Función que recoge un url de una API procesa una promesa y devuelve los datos obtenidos.

  return fetch(fuente)
    .then((respuesta) => {
      return respuesta.json(); 
    })
    .then((datos) => {
      return datos; 
    })
    .catch((error) => {
      console.error(error); 
    });
};



export {getDatos,getDatosResults};