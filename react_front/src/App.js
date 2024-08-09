import "./component/ui/Main/buttonMain"
import "./component/ui/Main/buttonMainMov"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BuiltRouter } from './builtRoter/builtRouter';

const URI = 'http://localhost:8000/valUser';

function App() {
  const [valInic, setValInic]  = useState('') 
  const [vistPag, setVistPag]  = useState('') 
 
  const builtVist = async () => {
    let bultPag
    bultPag = BuiltRouter(valInic);
    setVistPag(bultPag)
  }

  const getValInicUser = async () => {   
    const request  = await axios.get(URI)
    setValInic(request.data.statusUser)
  }
  useEffect(() => {
    getValInicUser()
  },[])

  useEffect(() => {
    builtVist()
  },[valInic])

  return (<>
      {vistPag}
  </>);
}

export default App;
