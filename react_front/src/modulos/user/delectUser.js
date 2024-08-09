import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "../../component/ui/input";
import { Button } from "../../component/ui/button";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/usuarios/"

const DelectUser = () => {
    const [Name, setName] = useState(' ')
    const [last_name, setLastName] = useState(' ')
    const [user, setUser] = useState(' ') 
    const [email, setEmail] = useState(' ')
    const [tel, setTel] = useState(' ')
    const [andress, setAndress] = useState(' ') 


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
        setUser(res.data.user)
        setAndress(res.data.andress)
        setTel(res.data.tel)
      }  
    return(<>
        <div className="divContain">
            <div className="divContainI">
                <label className="block text-gray-700 text-sm font-bold mb-2" style={{ textAlign: 'center' }} htmlFor="Title">
                    Eliminar de usuario
                </label>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nombre">
                        Nombre
                    </label>
                    <Input id="grid-first-name" type="text" placeholder="Nombre" disabled={ true } value={ Name }></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Apellido">
                        Apellido
                    </label>
                    <Input id="grid-first-name" type="text" placeholder="Apellido" disabled={ true } value={ last_name }></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                        Usuario
                    </label>
                    <Input id="grid-first-name" type="text" placeholder="Usuario" disabled={ true } value={ user }></Input>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                        EmaiL
                    </label>
                    <Input id="grid-first-name" type="text" placeholder="Email" disabled={ true } value={ email }></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Tel">
                        Tel 
                    </label>
                    <Input id="grid-first-name" type="text" placeholder="Tel" disabled={ true } value={ tel }></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direcc">
                        Dirección 
                    </label>
                    <Input id="grid-first-name" type="text" placeholder="Dirección" disabled={ true } value={ andress }></Input>
                </div>
                <Button onClick={ () => delectUser() }>Eliminar</Button>
            </div>
        </div>
    </>)
}

export default DelectUser