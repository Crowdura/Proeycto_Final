import React, { useState } from "react";
import axios from "axios";
import { Input } from "../../component/ui/input";
import { Button } from "../../component/ui/button";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/usuarios/"
const URIG = "http://localhost:8000/usuarios/GoogleAuth"

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
            andress: andress
        })
        navigate('/user/')

    }
    const creatUserGoogle = async (e) => {
        e.preventDefault()
        await axios.post(URIG)
    }

    return(<>
        <div className="divContain">
            <div className="divContainI">
            <label className="block text-gray-700 text-sm font-bold mb-2" style={{ textAlign: 'center' }} htmlFor="Title">
                    Registro de usuario
                </label>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nombre">
                        Nombre
                    </label>
                    <Input onChange={ (e) => setName(e.target.value) } id="nameP" type="text" placeholder="Nombre"></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Apellido">
                        Apellido
                    </label>
                    <Input onChange={ (e) => setLastName(e.target.value) } id="nameL" type="text" placeholder="Apellido"></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                        Usuario
                    </label>
                    <Input onChange={ (e) => setUser(e.target.value) } id="User" type="text" placeholder="Usuario"></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                        EmaiL
                    </label>
                    <Input onChange={ (e) => setEmail(e.target.value) } id="email" type="text" placeholder="Email" ></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        password
                    </label>
                    <Input onChange={ (e) => setPassword(e.target.value) } id="password" type="password" placeholder="password"></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Tel">
                        Tel 
                    </label>
                    <Input onChange={ (e) => setTel(e.target.value) } id="tel" type="num" placeholder="Tel"></Input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direcc">
                        Dirección 
                    </label>
                    <Input onChange={ (e) => setAndress(e.target.value) } id="andress" type="text" placeholder="Dirección"></Input>
                </div>
                <div className="mb-4">
                    <Button onClick={ (e) => createUser(e) }>Crear</Button>
                    <button onClick={ (e) => creatUserGoogle(e) } className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                        <span>Login with Google</span>
                    </button>
                </div>
            </div>
        </div>
    </>)
}

export default CreacteUser