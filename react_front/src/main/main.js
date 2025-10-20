import axios from "axios"
import { useState, useEffect} from "react"
import { BuiltButton } from "./builtButton.js";

const urlApi = process.env.API_NODE || "http://localhost:8000"
const URI = `${ urlApi }/valUser`;

const Main = () => {
    const [valPrin, setVal] = useState('')
//    const [valIdCarg, setvalCarg] = useState('') 
    const [valBuilt, setValBuilt] = useState('')

    const showNarMo = () => { 
        let menu = document.getElementById('mobile-menu');

        if(menu.classList.contains('hidden')){
            menu.classList.remove('hidden') 
        } else{
            menu.classList.add('hidden')
        }
    }

    const getValInicUser = async () => {
        try{
            const request = await axios.get(URI)
            setVal(request.data.statusUser)
        }catch(e){
            console.error(e)
        }
    }

    const buitlMain = () => {
        const builtsMain = BuiltButton(valPrin)
        setValBuilt(builtsMain)
    }
    useEffect(() => {
        getValInicUser()
    },[])

    useEffect(() => {
        buitlMain()
    },[valPrin])

    

    return(<>
        <nav className="bg-slate-950">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" onClick={() => showNarMo()} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                        
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>           
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">

                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                               {valBuilt.ButtonMain} 
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {valBuilt.ButtonMainL}
                    </div>
                </div>
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {valBuilt.ButtonMainMovil}
                    </div>
                </div>
            </div>
        </nav>
    </>)
}

export default Main