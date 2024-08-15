import React from "react"
import { ButtonMain, ButtonMainP } from "../component/ui/Main/buttonMain"
import { ButtonMainUserOuput } from "../component/ui/Main/buttonMainUserI"
import { ButtonMainMovilP, ButtonMainMovil } from "../component/ui/Main/buttonMainMov"
import axios from "axios"
import { ButtonMainMovUserI, ButtonMainMovUserO, ButtonMainUserI, ButtonMainUserO } from "../component/ui/Main/buttonMainUserI"

const URI = "http://localhost:8000/userAction/longOut";

export const BuiltButton = (ValUser, ValUserCarg) => {
    let valBuiltMain
    let valBuiltMainM
    let valBuiltMainL

    const userOutput =  async () => {
        try{
            const reques = await axios.get(URI)
            window.location.href = `/`
        }catch(e){
            console.error(e)
        }
 
    }

    switch (ValUser) {
        case 'A':
            valBuiltMain  = <>
                                <ButtonMainP href="/">Catalogo de proyectos</ButtonMainP>
                                <ButtonMain href="/admin/A">Lista de administradores</ButtonMain>
                                <ButtonMain href="/Gerentes/G">Lista de gerentes</ButtonMain>
                                <ButtonMain href="/employ/E">Lista de empleados</ButtonMain>
                                <ButtonMain href="/user/U">Lista de usuarios</ButtonMain>
                            </>
            
            valBuiltMainL = <>
                                <ButtonMainUserOuput onClick={ () => userOutput() }>Salir</ButtonMainUserOuput>
                            </> 

            valBuiltMainM = <>
                                <ButtonMainMovilP href="/">Catalogo de proyectos</ButtonMainMovilP>
                                <ButtonMainMovil href="/admin/A">Lista de administradores</ButtonMainMovil>
                                <ButtonMainMovil href="/Gerentes/G">Lista de gerentes</ButtonMainMovil>
                                <ButtonMainMovil href="/employ/E">lista de empleados</ButtonMainMovil>
                                <ButtonMainMovil href="/user/U">Lista de usuarios</ButtonMainMovil>
                                <ButtonMainMovUserO onClick={ () => userOutput() }>Salir</ButtonMainMovUserO>
                            </>
            break;
        case 'G':
            valBuiltMain  = <>
                                <ButtonMainP href="/">Catalogo de proyectos</ButtonMainP>
                                <ButtonMain href="/employ/E">lista de empleados</ButtonMain>
                                <ButtonMain href="/user/U">Lista de usuarios</ButtonMain>
                            </>
            valBuiltMainL = <>
                                <ButtonMainUserOuput onClick={ () => userOutput() }>Salir</ButtonMainUserOuput>
                            </> 
            valBuiltMainM = <>
                                <ButtonMainMovilP href="/">Catalogo de proyectos</ButtonMainMovilP>
                                <ButtonMainMovil href="/employ/E">lista de empleados</ButtonMainMovil>
                                <ButtonMainMovil href="/user/U">Lista de usuarios</ButtonMainMovil>
                                <ButtonMainMovUserO onClick={ () => userOutput() }>Salir</ButtonMainMovUserO>
                            </>
            break;
        case 'E':
            valBuiltMain  = <>
                                <ButtonMainP href="/">Catalogo de proyectos</ButtonMainP>
                                <ButtonMain href="/user/U">Lista de usuarios</ButtonMain>
                            </>
            valBuiltMainL = <>
                                <ButtonMainUserOuput onClick={ () => userOutput() }>Salir</ButtonMainUserOuput>
                            </> 
            valBuiltMainM = <>
                                <ButtonMainMovilP href="/">Catalogo de proyectos</ButtonMainMovilP>
                                <ButtonMainMovil href="/user">Lista de usuarios</ButtonMainMovil>
                                <ButtonMainMovUserO onClick={ () => userOutput() }>Salir</ButtonMainMovUserO>
                            </>
            break;
        case 'U':
            valBuiltMain  = <>
                                <ButtonMainP href="/">Catalogo de proyectos</ButtonMainP>
                                <ButtonMain href="/CatalogoProy/create">Crear Proyecto</ButtonMain>
                            </>
            valBuiltMainL = <>
                                <ButtonMainUserOuput onClick={ () => userOutput() }>Salir</ButtonMainUserOuput>
                            </> 
            valBuiltMainM = <>
                                <ButtonMainMovilP href="/">Catalogo de proyectos</ButtonMainMovilP>
                                <ButtonMainMovil href="/CatalogoProy/create">Crear Proyecto</ButtonMainMovil>
                                <ButtonMainMovUserO onClick={ () => userOutput() }>Salir</ButtonMainMovUserO>
                            </>
            break;
        case 'D':
            valBuiltMain  = <>
                                <ButtonMainP href="/">Inicio</ButtonMainP>
                                <ButtonMain  href="/Contac">contactos</ButtonMain>

                            </>

            valBuiltMainL = <>
                                <ButtonMainUserI href="/user/ingre">Ingreso</ButtonMainUserI>
                                <ButtonMainUserO href="/user/create">Registro</ButtonMainUserO>
                            </>
            valBuiltMainM = <>
                                <ButtonMainMovilP href="/">Inicio</ButtonMainMovilP>
                                <ButtonMainMovil href="/Contac">contactos</ButtonMainMovil>
                                <ButtonMainMovUserI href="/user/ingre">Ingreso</ButtonMainMovUserI>
                                <ButtonMainMovUserI href="/user/create">Registro</ButtonMainMovUserI>
                            </>
            break;
        default:
            break;
    }
    return {ButtonMain: valBuiltMain, ButtonMainL: valBuiltMainL, ButtonMainMovil: valBuiltMainM}
}