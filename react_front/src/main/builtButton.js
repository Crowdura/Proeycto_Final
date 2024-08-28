import React from "react"
import { ButtonMain, ButtonMainP } from "../component/ui/Main/buttonMain"
import { ButtonMainUserOuput } from "../component/ui/Main/buttonMainUserI"
import { ButtonMainMovilP, ButtonMainMovil } from "../component/ui/Main/buttonMainMov"
import axios from "axios"
import { ButtonMainMovUserI, ButtonMainMovUserO, ButtonMainUserI, ButtonMainUserO } from "../component/ui/Main/buttonMainUserI"

const URI = `${ process.env.REACT_APP_API_URL }/userAction/longOut`;

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
                                <ButtonMainP id="navCatalog" href="/">Catalogo de proyectos</ButtonMainP>
                                <ButtonMain id="navAdmin" href="/admin/A">Lista de administradores</ButtonMain>
                                <ButtonMain id="navGeren" href="/Gerentes/G">Lista de gerentes</ButtonMain>
                                <ButtonMain id="navEmplo" href="/employ/E">Lista de empleados</ButtonMain>
                                <ButtonMain id="navUser" href="/user/U">Lista de usuarios</ButtonMain>
                            </>
            
            valBuiltMainL = <>
                                <ButtonMainUserOuput id="sesiOuput" onClick={ () => userOutput() }>Salir</ButtonMainUserOuput>
                            </> 

            valBuiltMainM = <>
                                <ButtonMainMovilP id="navCatalog" href="/">Catalogo de proyectos</ButtonMainMovilP>
                                <ButtonMainMovil id="navAdmin" href="/admin/A">Lista de administradores</ButtonMainMovil>
                                <ButtonMainMovil id="navGeren" href="/Gerentes/G">Lista de gerentes</ButtonMainMovil>
                                <ButtonMainMovil id="navEmplo" href="/employ/E">lista de empleados</ButtonMainMovil>
                                <ButtonMainMovil id="navUser" href="/user/U">Lista de usuarios</ButtonMainMovil>
                                <ButtonMainMovUserO id="sesiOuput" onClick={ () => userOutput() }>Salir</ButtonMainMovUserO>
                            </>
            break;
        case 'G':
            valBuiltMain  = <>
                                <ButtonMainP id="navCatalog" href="/">Catalogo de proyectos</ButtonMainP>
                                <ButtonMain id="navEmplo" href="/employ/E">lista de empleados</ButtonMain>
                                <ButtonMain id="navUser" href="/user/U">Lista de usuarios</ButtonMain>
                            </>
            valBuiltMainL = <>
                                <ButtonMainUserOuput id="sesiOuput" onClick={ () => userOutput() }>Salir</ButtonMainUserOuput>
                            </> 
            valBuiltMainM = <>
                                <ButtonMainMovilP id="navCatalog" href="/">Catalogo de proyectos</ButtonMainMovilP>
                                <ButtonMainMovil id="navEmplo" href="/employ/E">lista de empleados</ButtonMainMovil>
                                <ButtonMainMovil id="navUser" href="/user/U">Lista de usuarios</ButtonMainMovil>
                                <ButtonMainMovUserO id="sesiOuput" onClick={ () => userOutput() }>Salir</ButtonMainMovUserO>
                            </>
            break;
        case 'E':
            valBuiltMain  = <>
                                <ButtonMainP id="navCatalog" href="/">Catalogo de proyectos</ButtonMainP>
                                <ButtonMain id="navUser" href="/user/U">Lista de usuarios</ButtonMain>
                            </>
            valBuiltMainL = <>
                                <ButtonMainUserOuput id="sesiOuput" onClick={ () => userOutput() }>Salir</ButtonMainUserOuput>
                            </> 
            valBuiltMainM = <>
                                <ButtonMainMovilP id="navCatalog" href="/">Catalogo de proyectos</ButtonMainMovilP>
                                <ButtonMainMovil href="/user">Lista de usuarios</ButtonMainMovil>
                                <ButtonMainMovUserO id="sesiOuput" onClick={ () => userOutput() }>Salir</ButtonMainMovUserO>
                            </>
            break;
        case 'U':
            valBuiltMain  = <>
                                <ButtonMainP id="navCatalog" href="/">Catalogo de proyectos</ButtonMainP>
                                <ButtonMain id="navCatalogCreat" href="/CatalogoProy/create">Crear Proyecto</ButtonMain>
                            </>
            valBuiltMainL = <>
                                <ButtonMainUserOuput id="sesiOuput" onClick={ () => userOutput() }>Salir</ButtonMainUserOuput>
                            </> 
            valBuiltMainM = <>
                                <ButtonMainMovilP id="navCatalog" href="/">Catalogo de proyectos</ButtonMainMovilP>
                                <ButtonMainMovil id="navCatalogCreat" href="/CatalogoProy/create">Crear Proyecto</ButtonMainMovil>
                                <ButtonMainMovUserO id="sesiOuput" onClick={ () => userOutput() }>Salir</ButtonMainMovUserO>
                            </>
            break;
        case 'D':

            valBuiltMainL = <>
                                <ButtonMainUserI id="navCatalog" href="/">Ingreso</ButtonMainUserI>
                                <ButtonMainUserO href="/user/create">Registro</ButtonMainUserO>
                            </>
            valBuiltMainM = <>
                                <ButtonMainMovUserI id="navCatalog" href="/">Ingreso</ButtonMainMovUserI>
                                <ButtonMainMovUserI href="/user/create">Registro</ButtonMainMovUserI>
                            </>
            break;
        default:
            break;
    }
    return {ButtonMain: valBuiltMain, ButtonMainL: valBuiltMainL, ButtonMainMovil: valBuiltMainM}
}