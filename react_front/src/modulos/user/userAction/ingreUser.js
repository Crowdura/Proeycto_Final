import React, { useEffect, useState} from "react";
import getValInicUser from "../../valInUser/valIniUser.js"; 
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const URI = `${ process.env.REACT_APP_API_URL }/userAction/IngreUser`

const IngreUser = () => {
    const [password, setPassword] = useState('')
    const [userName, setUseName]  = useState('')

    const navigate = useNavigate()

    const authHeader = 'Basic ' + btoa(userName + ':' + password)

    const Ingreuser = async () => {
        try{
            console.log(authHeader)
            const reques = await axios.get(URI,{
                headers:{
                    'Authorization' : authHeader,
                }
            })
            getValInicUser()
        }catch(e){
            console.error('Error fetching data:', e);
        }
    }

    const reloadPag = () => {
        setTimeout(() => {
            navigate('/')
            window.location.reload()
        }, 1000)
    }

    return(
    <>
        <div className="divContain" style={{ height: "100%" }}>
            <div className="container h-full p-5" style={{ margin: "auto"}}>
                <div className="flex h-full w-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">                             
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">

                                        <div className="text-center">
                                            <img className="mx-auto w-48" src="" alt="logo"/>
                                            <h4 className="mb-12 mt-1 pb-1 text-x1 font-semibold">
                                                nosotros somos
                                            </h4>
                                        </div>

                                        <form>
                                            <p className="mb-4">Introduca su cuenta</p>
                                            <div className="relative mb-4" data-twe-input-wrapper-init>
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                                    Correo
                                                </label>
                                                <input onChange={ (e) => setUseName(e.target.value) } className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                                            </div>

                                            <div className="relative mb-4" data-twe-input-wrapper-init>
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                                    password
                                                </label>
                                                <input onChange={ (e) => setPassword(e.target.value) } className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
                                            </div>

                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <button onClick={ () => Ingreuser().then(() => { reloadPag() }) } className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong" type="button" style={{background: "linear-gradient(to right, rgb(2 6 23 / var(--tw-bg-opacity)), rgb(2 6 23 / var(--tw-bg-opacity)), #071c35, #051e3b)"}}>
                                                    log in
                                                </button>
                                                <a href="">Se le olvido la contraseña?</a>
                                            </div>

                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 me-2">No tiene cuenta?</p>
                                                <button onClick={() => navigate('/user/create')} type="button" className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-blue-950 dark:focus:bg-blue-900">
                                                    Registrarse
                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                                <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none" style={{background: "linear-gradient(to right, rgb(2 6 23 / var(--tw-bg-opacity)), rgb(2 6 23 / var(--tw-bg-opacity)), #071c35, #051e3b)"}}>
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-xl font-semilod">
                                                Compañia
                                        </h4>
                                        <p className="text-sm">
                                            Prueba de contenido
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </>)
}

export default IngreUser