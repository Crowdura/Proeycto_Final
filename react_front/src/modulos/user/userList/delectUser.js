import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const URI =`${ import.meta.env.REACT_APP_API_URL }/usuarios/`

const DelectUser = () => {
    const [Name, setName] = useState('')
    const [last_name, setLastName] = useState('')
    const [user, setUserName] = useState('') 
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [andress, setAndress] = useState('') 



    const navigate = useNavigate()
    const {id} = useParams()

    const delectUser = async () => {
            await axios.delete(URI+id)
            navigate('/user/')
        console.log('Prueba')
    }

    useEffect( () => {
        getUserId()
    },[])

    const getUserId = async () => {
        const res = await axios.get(URI+id)
        setName(res.data.Name)
        setLastName(res.data.lastName)
        setEmail(res.data.email)
        setUserName(res.data.user)
        setAndress(res.data.andress)
        setTel(res.data.tel)
      }  
    return(<>
        <div className="divContain" style={{ height: "100%" }}>
            <div className="container h-full p-5" style={{ margin: "auto"}}>
                <div className="flex w-full justify-center text-neutral-800 dark:text-neutral-200">
                    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Eliminación de usuario</h2>

                        <form>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="Name">Nombre</label>
                                    <input id="Name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" value={Name} disabled/>
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="last_name">Email Address</label>
                                    <input id="last_name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" value={last_name} disabled/>
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="user">Username</label>
                                    <input id="user" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" value={user} disabled/>
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">email</label>
                                    <input id="passwordConfirmation" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" value={email} disabled/>
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">tel</label>
                                    <input id="passwordConfirmation" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" value={tel} disabled/>
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">andress</label>
                                    <input id="passwordConfirmation" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" value={andress} disabled/>
                                </div>
                            </div>
                            <div class="flex justify-end mt-6">
                                <button onClick={() => { delectUser() }} class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Eliminar</button>
                            </div>
                        </form>
                    </section>  
                </div>
            </div>
        </div>
    </>)
}

export default DelectUser