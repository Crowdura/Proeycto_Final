import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const URI = `${ import.meta.env.REACT_APP_API_URL }/usuarios/`

const UpdateUser = () => {
    const [Name, setName] = useState(' ')
    const [last_name, setLastName] = useState(' ')
    const [user, setUser] = useState(' ') 
    const [email, setEmail] = useState(' ')
    const [tel, setTel] = useState(' ')
    const [andress, setAndress] = useState(' ') 

    const {id}     = useParams()
    const navigate = useNavigate()

    const updateUser = async (e) => {
        e.preventDefault()
        console.log( Name + last_name )
        await axios.put(URI+id, {
            Name: Name,
            lastName: last_name,
            user: user,
            email: email,
            tel: tel,
            andress: andress
        })
        navigate('/user/')

    }

    const getUserId = async () => {
        const res = await axios.get(URI+id)
        setName(res.data.Name)
        setLastName(res.data.lastName)
        setEmail(res.data.email)
        setUser(res.data.user)
        setAndress(res.data.andress)
        setTel(res.data.tel)
    }  

    useEffect( () => {
        getUserId()
    },[])


    return(<>
         <div className="divContain" style={{ height: "100%" }}>
            <div className="container h-full p-5" style={{ margin: "auto"}}>
                <div className="flex w-full justify-center text-neutral-800 dark:text-neutral-200">
                    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Actualización de usuario</h2>

                        <form>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="Name">Nombre</label>
                                    <input onChange={(e) => setName(e.target.value)} id="Name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" value={Name} />
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="last_name">Email Address</label>
                                    <input onChange={(e) => setLastName(e.target.value)}  id="last_name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" value={last_name}/>
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="user">Username</label>
                                    <input onChange={(e) => setUser(e.target.value)} id="user" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" value={user}/>
                                </div>

                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="email">email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} id="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" value={email}/>
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="tel">tel</label>
                                    <input onChange={(e) => setTel(e.target.value)} id="tel" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" value={tel}/>
                                </div>
                                <div>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="andress">andress</label>
                                    <input onChange={(e) => setAndress(e.target.value)} id="andress" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" value={andress}/>
                                </div>
                            </div>
                            <div class="flex justify-end mt-6">
                                <button onClick={() => { updateUser() }} class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Actualizar</button>
                            </div>
                        </form>
                    </section>  
                </div>
            </div>
        </div>
    </>)
}

export default UpdateUser