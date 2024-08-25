import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const URI = `${ process.env.REACT_APP_API_URL }/proyecto/`
const URIS = `${ process.env.REACT_APP_API_URL }/valUser`

const ShowCataloPro = () => {
    const[dataCatPro, setDataCatPro] = useState([])
    const[staUser, setStaUser ] = useState('')

    const navigate = useNavigate()

    const valData = async () => {
        try{
            const resSt = await axios.get(URIS)
            if(resSt.status == 200){
                setStaUser(resSt.data.statusUser)
                return ConsultProyecAd(resSt.data.userId,resSt.data.statusUser)
            }
        }catch(e){
            console.error(e)
        }
    }

    const ConsultProyecAd = async (userId,staUser) => {
        console.log(userId)
        console.log(staUser)
        try{
            const params = {
                key1:userId, 
                key2:staUser
            }
            const res = await axios.get(URI,{ params })
            setDataCatPro(res.data)
            console.log(dataCatPro)
        }catch(e){
            console.error(e)
        }
    }

    useEffect(() => {
        valData()
    }, [])

    return(
    <>
        <div className="divCont bg-neutral-200 dark:bg-neutral-700 justify-center items-center h-screen">
            <section className="gradient-form h-auto w-auto bg-neutral-200 dark:bg-neutral-700">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8">
            {dataCatPro.map( doc => {
                    return  <div className="m-6 h-auto w-auto rounded-lg bg-gray-200">
                    <article className="hover:animate-background rounded-lg bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                        <div className="rounded-[10px] bg-slate-950 p-4 !pt-20 sm:p-6">
                            <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>
                            <a>
                                <h3 className="mt-0.5 text-lg font-medium text-slate-400">
                                    { doc.NameProyec }
                                </h3>
                            </a>
                            <div className="mt-4 flex flex-wrap gap-1">
                                <span
                                    className="whitespace-nowrap rounded-full bg-blue-950 px-2.5 py-0.5 text-xs text-slate-400"
                                >
                                    { doc.status }
                                </span>

                                <span
                                    className="whitespace-nowrap rounded-full bg-blue-950 px-2.5 py-0.5 text-xs  text-slate-400"
                                >
                                    JavaScript
                                </span>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-1">
                                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-4">
                                    <button onClick={ () => navigate(`/CatalogoProy/update/${ doc.id }`)} className="h-full w-full p-auto m-auto bg-slate-950 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded ">
                                        <svg  className="h-5 w-5 text-slate-600"  width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                    </button>
                                    <button onClick={ () => navigate(`/CatalogoProy/delect/${ doc.id }`) } className="h-full w-full p-auto m-auto bg-slate-950 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded ">
                                        <svg  className="h-5 w-5 text-slate-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                                    </button>
                                    <button onClick={ () => navigate(`/CatalogoProy/showProyect/${ doc.id }`) } className="h-full w-full p-auto m-auto bg-slate-950 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded ">
                                        <svg fill="rgb(71 85 105 / var(--tw-text-opacity))" className="h-5 w-5 text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.78 59" id="document-view"><g><g><g><path d="M48.27,12.73l-12-12A2.51,2.51,0,0,0,34.5,0h-24A10.51,10.51,0,0,0,0,10.5v38A10.51,10.51,0,0,0,10.5,59H29.75a2.48,2.48,0,0,0,1.12-.26,2.51,2.51,0,0,0,1.32-2.81,2.62,2.62,0,0,0-.4-.88,17.5,17.5,0,0,1,14.71-27,2.5,2.5,0,0,0,2.5-2.5V14.5A2.51,2.51,0,0,0,48.27,12.73ZM21.5,46.33h-10a2.5,2.5,0,0,1,0-5h10a2.5,2.5,0,0,1,0,5Zm4.12-12.66H11.5a2.5,2.5,0,0,1,0-5H25.62a2.5,2.5,0,1,1,0,5ZM44,16H33V5h.46L44,15.54Z"></path><path d="M57.78,41.6c-2.06-2.41-6.28-6.45-11.5-6.45s-9.45,4-11.5,6.45a4.16,4.16,0,0,0,0,5.42c2,2.41,6.28,6.45,11.5,6.45s9.44-4,11.5-6.45A4.16,4.16,0,0,0,57.78,41.6Zm-11.5,6.21a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,46.28,47.81Z"></path></g></g></g></svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </article>
                </div>
            
            })}
                </div>
            </section>
        </div>
    </>)
}

export default ShowCataloPro