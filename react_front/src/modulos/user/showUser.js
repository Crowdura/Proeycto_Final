import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Input } from "../../component/ui/input";

const URI = "http://localhost:8000/usuarios/"

const ShowUser = () =>{
    const [Name, setName] = useState(' ')
    const [last_name, setLastName] = useState(' ')
    const [user, setUser] = useState(' ') 
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState('')
    const [tel, setTel] = useState(' ')
    const [andress, setAndress] = useState(' ') 

    const {id} = useParams()

    const getdata = async () => {
        const res = await axios.get(URI+id) 
        setName(res.data.Name)
        setLastName(res.data.last_name)
    }

    useEffect({

    },[])

    return(<>
        <div className="divContain">
            <div className="divContainI">
                <label className="block text-gray-700 text-sm font-bold mb-2" style={{ textAlign: 'center' }} htmlFor="Title">
                    vista de usuario
                </label>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nombre">
                        Nombre
                    </label>
                    <Input id="grid-first-name" type="text" placeholder="Nombre"></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Apellido">
                        Apellido
                    </label>
                    <Input id="grid-first-name" type="text" placeholder="Apellido"></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                        Usuario
                    </label>
                    <Input id="grid-first-name" type="text" placeholder="Usuario"></Input>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                        EmaiL
                    </label>
                    <Input id="grid-first-name" type="text" placeholder="Email"></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Tel">
                        Tel 
                    </label>
                    <Input id="grid-first-name" type="text" placeholder="Tel"></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direcc">
                        Dirección 
                    </label>
                    <Input id="grid-first-name" type="text" placeholder="Dirección"></Input>
                </div>
            </div>
        </div>
    </>)
}

export default ShowUser