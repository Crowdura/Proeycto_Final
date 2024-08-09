import { ButtonMain, ButtonMainP } from "../component/ui/Main/buttonMain"
import { ButtonMainMovilP, ButtonMainMovil } from "../component/ui/Main/buttonMainMov"
import { ButtonMainMovUserI, ButtonMainMovUserO, ButtonMainUserI, ButtonMainUserO } from "../component/ui/Main/buttonMainUserI"

export const BuiltButton = (ValUser) => {
    let valBuiltMain
    let valBuiltMainM
    let valBuiltMainL

    switch (ValUser) {
        case 'A':
            valBuiltMain  = <>
                                <ButtonMainP>Inicio</ButtonMainP>
                                <ButtonMain>Lista de administradores</ButtonMain>
                                <ButtonMain>Lista de gerentes</ButtonMain>
                                <ButtonMain>Lista de empleados</ButtonMain>
                                <ButtonMain>Lista de usuarios</ButtonMain>
                                <ButtonMain>Lista de catalogo de Proyectos</ButtonMain>
                                <ButtonMain>salir</ButtonMain>
                            </>
            valBuiltMainM = <>
                                <ButtonMainMovilP>Inicio</ButtonMainMovilP>
                                <ButtonMainMovil>Lista de administradores</ButtonMainMovil>
                                <ButtonMainMovil>Lista de gerentes</ButtonMainMovil>
                                <ButtonMainMovil>lista de empleados</ButtonMainMovil>
                                <ButtonMainMovil>Lista de usuarios</ButtonMainMovil>
                                <ButtonMainMovil>Lista de catalogo de Proyectos</ButtonMainMovil>
                                <ButtonMainMovil>salir</ButtonMainMovil>
                            </>
            break;
        case 'G':
            valBuiltMain  = <>
                                <ButtonMainP>Inicio</ButtonMainP>
                                <ButtonMain>lista de empleados</ButtonMain>
                                <ButtonMain>Lista de usuarios</ButtonMain>
                                <ButtonMain>Lista de catalogo de Proyectos</ButtonMain>
                                <ButtonMain>salir</ButtonMain>
                            </>
            valBuiltMainM = <>
                                <ButtonMainMovilP>Inicio</ButtonMainMovilP>
                                <ButtonMainMovil>lista de empleados</ButtonMainMovil>
                                <ButtonMainMovil>Lista de usuarios</ButtonMainMovil>
                                <ButtonMainMovil>Lista de catalogo de Proyectos</ButtonMainMovil>
                                <ButtonMainMovil>salir</ButtonMainMovil>
                            </>
            break;
        case 'E':
            valBuiltMain  = <>
                                <ButtonMainP>Inicio</ButtonMainP>
                                <ButtonMain>Lista de catalogo de Proyectos</ButtonMain>
                                <ButtonMain>Lista de usuarios</ButtonMain>
                                <ButtonMain>salir</ButtonMain>
                            </>
            valBuiltMainM = <>
                                <ButtonMainMovilP>Inicio</ButtonMainMovilP>
                                <ButtonMainMovil>Lista de catalogo de Proyectos</ButtonMainMovil>
                                <ButtonMainMovil>Lista de usuarios</ButtonMainMovil>
                                <ButtonMainMovil>salir</ButtonMainMovil>
                            </>
            break;
        case 'U':
            valBuiltMain  = <>
                                <ButtonMainP>Inicio</ButtonMainP>
                                <ButtonMain>Lista de catalogo de Proyectos</ButtonMain>
                                <ButtonMain></ButtonMain>        
                            </>
            valBuiltMainM = <>
                                <ButtonMainMovilP>Inicio</ButtonMainMovilP>
                                <ButtonMainMovil>Lista de catalogo de Proyectos</ButtonMainMovil>
                                <ButtonMainMovil>salir</ButtonMainMovil>
                            </>
            break;
        case 'D':
            valBuiltMain  = <>
                                <ButtonMainP href="/">Inicio</ButtonMainP>
                                <ButtonMain  href="/">contactos</ButtonMain>
                                <ButtonMain  href="/">Proyectos</ButtonMain>

                            </>

            valBuiltMainL = <>
                                <ButtonMainUserI href="/user/ingre">Ingreso</ButtonMainUserI>
                                <ButtonMainUserO href="/user/create">Registro</ButtonMainUserO>
                            </>
            valBuiltMainM = <>
                                <ButtonMainMovilP>Inicio</ButtonMainMovilP>
                                <ButtonMainMovil>contactos</ButtonMainMovil>
                                <ButtonMainMovil>Proyectos</ButtonMainMovil>
                                <ButtonMainMovUserI href="/user/ingre">Ingreso</ButtonMainMovUserI>
                                <ButtonMainMovUserO href="/user/create">Registro</ButtonMainMovUserO>
                            </>
            break;
        default:
            break;
    }
    return {ButtonMain: valBuiltMain, ButtonMainL: valBuiltMainL, ButtonMainMovil: valBuiltMainM}
}