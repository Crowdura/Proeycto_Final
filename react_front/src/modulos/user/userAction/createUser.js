import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URI  = `${ process.env.REACT_APP_API_URL }/usuarios/`

const URIG = `${ process.env.REACT_APP_API_URL }/usuarios/GoogleAuth`

const CreacteUser = () => {
    const [Name, setName] = useState(' ')
    const [last_name, setLastName] = useState(' ')
    const [user, setUser] = useState(' ') 
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState('')
    const [tel, setTel] = useState(' ')
    const [andress, setAndress] = useState(' ') 

    const navigate = useNavigate()

    const createUser = async (e) => {
        e.preventDefault()
        console.log( Name + last_name )
        await axios.post(URI, {
            Name: Name,
            lastName: last_name,
            user: user,
            email: email,
            password: password,
            tel: tel,
            andress: andress,
            cargo: '9Jj0x4BL0BkzYyQZLQS7'
        })
        navigate('/user/ingre')
    }
    const creatUserGoogle = async (e) => {
        e.preventDefault()
        await axios.post(URIG)
    }

    return(<>
        <div className="divContain" style={{ overflow: 'hidden' }}>
            <div className="w-full h-full" style={{ margin: 'auto' }}>
                <div className="container h-full p-5" style={{ margin: "auto" }}>
                    <div className="flex h-full w-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                        <div>
                            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                                <div className="g-0 lg:flex lg:flex-wrap">                             
                                    <div className="px-4 md:px-0 lg:w-6/12">
                                        <div className="md:mx-6 md:p-12">
                                            <div className="text-center">
                                                <h4 className="mb-12 mt-1 pb-1 text-x1 font-semibold">
                                                    Registro de usuarios
                                                </h4>
                                            </div>

                                            <form>
                                                <p className="mb-4">Introduca su datos personales</p>
                                                <div className="relative mb-4" data-twe-input-wrapper-init>
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                                        name
                                                    </label>
                                                    <input onChange={ (e) => setName( e.target.value ) } className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name"/>
                                                </div>

                                                <div className="relative mb-4" data-twe-input-wrapper-init>
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameL">
                                                        last name
                                                    </label>
                                                    <input onChange={ (e) => setLastName(e.target.value) } className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nameL" type="text" placeholder="Last name"/>
                                                </div>

                                                <div className="relative mb-4" data-twe-input-wrapper-init>
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameL">
                                                        Tel
                                                    </label>
                                                    <input onChange={ (e) => setTel(e.target.value) } className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Tel" type="num" placeholder="tel"/>
                                                </div>

                                                <div className="relative mb-4" data-twe-input-wrapper-init>
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                                        username
                                                    </label>
                                                    <input onChange={ (e) => setUser(e.target.value) } className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="username"/>
                                                </div>

                                                <div className="relative mb-4" data-twe-input-wrapper-init>
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameL">
                                                        andress
                                                    </label>
                                                    <input onChange={ (e) => setAndress(e.target.value) } className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="andress" type="num" placeholder="andress"/>
                                                </div>

                                                <div className="relative mb-4" data-twe-input-wrapper-init>
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                                        email
                                                    </label>
                                                    <input onChange={ (e) => setEmail(e.target.value) } className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email"/>
                                                </div>

                                                <div className="relative mb-4" data-twe-input-wrapper-init>
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                                        password
                                                    </label>
                                                    <input onChange={ (e) => setPassword(e.target.value) } className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
                                                </div>

                                                <div className="mb-12 pb-1 pt-1 text-center">
                                                    <button onClick={ (e) => createUser(e) } className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong" type="button" style={{background: "linear-gradient(to right, rgb(2 6 23 / var(--tw-bg-opacity)), rgb(2 6 23 / var(--tw-bg-opacity)), #071c35, #051e3b)"}}>
                                                        registrarse
                                                    </button>
                                                    <a href="">Se le olvido la contraseña?</a>
                                                </div>

                                                <div className="flex items-center justify-between pb-6">
                                                    <p className="mb-0 me-2">ya tiene cuenta?</p>
                                                    <button onClick={() => navigate('/user/ingre')} type="button" className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-blue-950 dark:focus:bg-blue-900">
                                                        Ingresar
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none" style={{background: "linear-gradient(to right, rgb(2 6 23 / var(--tw-bg-opacity)), rgb(2 6 23 / var(--tw-bg-opacity)), #071c35, #051e3b)"}}>
                                        <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                            <h4 className="mb-6 text-xl font-semilod">
                                                Registro
                                            </h4>
                                            <p className="text-sm">
                                                Por favor ingrese sus datos personales para la creación del usuario.
                                            </p>
                                        </div>
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

export default CreacteUser