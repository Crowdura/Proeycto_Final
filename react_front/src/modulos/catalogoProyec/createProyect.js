import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const URI = "http://localhost:8000/proyecto/"

const CreateProyect = () => {
    const [nameProyect, setNameProyect] = useState('')
    const [descripProyect, setDesProyect] = useState('')
    const [statusProyect, setStatusProyect] = useState('')
    const [userAsing, setUserAsing] = useState('')
    const [fechaIni, setFechaIni] = useState('')
    const [fechaLast, setFechLast] = useState('')

    const navigate = useNavigate()

    const CreateProyec = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post(URI,{
                NameProyec: nameProyect,
                DescriProyect: descripProyect,
                status: statusProyect,
                userAsing: userAsing,
                FechaIni: fechaIni,
                FechaLast: fechaLast
            })
        }catch(e){
            console.error(e)
        }
        navigate('/')
    }


    useEffect(() => {

    },[])
    return(<>
        <div className="divContain" style={{ height: "100%" }}>
            <div className="container h-full p-5" style={{ margin: "auto"}}>
                <div className="flex w-full justify-center text-neutral-800 dark:text-neutral-200">
                    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Creación de proyecto</h2>

                        <form>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="nameProyect">Nombre del proyecto</label>
                                    <input onChange={(e) => {setNameProyect(e.target.value)}} id="nameProyect" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="descripProyect">Descrición</label>
                                    <input onChange={(e) => {setDesProyect(e.target.value)}} id="descripProyect" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="fechaIni">Fecha de creación</label>
                                    <input onChange={(e) => {setFechaIni(e.target.value)}} id="fechaIni" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="fechaLast"> Fecha de Finalización</label>
                                    <input onChange={(e) => {setFechLast(e.target.value)}} id="fechaLast" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="statusProyect"> Estado del proyecto</label>
                                    <input onChange={(e) => {setStatusProyect(e.target.value)}} id="statusProyect" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="userAsing">Usuarios asignados</label>
                                    <input onChange={(e) => {setUserAsing(e.target.value)}} id="userAsing" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                                </div>
                            </div>
                            <div className="flex justify-end mt-6">
                                <button onClick={(e) => { CreateProyec(e) }} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Crear</button>
                            </div>
                        </form>
                    </section>  
                </div>
            </div>
        </div>
    </>)
} 

export default CreateProyect
