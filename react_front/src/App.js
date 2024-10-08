import "./component/ui/Main/buttonMain"
import "./component/ui/Main/buttonMainMov" 
import axios from 'axios';
import React,{ useEffect, useState,useInsertionEffect} from 'react';
import { BuiltRouter } from './builtRoter/builtRouter';

const urlApi = process.env.API_NODE || "http://localhost:8000"

const URI = `${ urlApi }/valUser`;

function App() {
  const [valInic, setValInic]  = useState('') 
  const [vistPag, setVistPag]  = useState('') 

  const builtVist = async () => {
    let bultPag
    bultPag = BuiltRouter(valInic);
    setVistPag(bultPag)
  }

  const getValInicUser = async () => {     
    try{
      const request = await axios.get(URI,{
        headers:{
          'Cache-Control': 'no-cache', // Evita el almacenamiento en caché
          'Pragma': 'no-cache', // Compatibilidad con HTTP/1.0
        }
      });
      setValInic(request.data.statusUser)
    }catch(e){
      console.error('Error',e)
    }
  }
  useInsertionEffect(() => {
    getValInicUser()
  },[])

  useEffect(() => {
    builtVist()
  },[valInic])

  return (<>
            <div className="App">
              {vistPag}
            </div>  
          </>
  );
}

export default App;
