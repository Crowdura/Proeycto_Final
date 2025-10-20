import React from "react";
import axios from "axios";

const urlApi = process.env.API_NODE || "http://localhost:8000"

const URI = `${ urlApi }/valUser`;

const getValInicUser = async () => {     
    try{
      const request = await axios.get(URI,{
        headers:{
          'Cache-Control': 'no-cache', // Evita el almacenamiento en caché
          'Pragma': 'no-cache', // Compatibilidad con HTTP/1.0
        }
      });
      return request
    }catch(e){
      console.error(e)
    }
}

export default getValInicUser