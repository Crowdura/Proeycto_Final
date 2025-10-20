import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'

//Vistas de inicio
import Main from '../main/main';
import VistaPrin from '../modulos/Principal/principal.js';
import ContactVista from '../modulos/Principal/contactosVista.js';
// modulo de usuario
import DelectUser from '../modulos/user/userList/delectUser.js';
import UpdateUser from '../modulos/user/userList/updateUser.js';
import ShowListUser from '../modulos/user/userList/showListUser.js';
import ShowUser from '../modulos/user/userList/showUser.js';
//modulo de action usuario
import IngreUser from '../modulos/user/userAction/ingreUser.js';
import CreacteUser from '../modulos/user/userAction/createUser.js';
// modulo de catalogo
import ShowCataloPro from '../modulos/catalogoProyec/showCataloProye.js';
import ShowProyect from '../modulos/catalogoProyec/showProyect.js';
import CreateProyect from '../modulos/catalogoProyec/createProyect';
import UpdateProyect from '../modulos/catalogoProyec/updateProyect';
import DelectProyect from '../modulos/catalogoProyec/delectProyect';

export const BuiltRouter = (stUser) => {
    let builtRouter
    switch (stUser) {
        case 'A':
            builtRouter =   <>
                                <Main/>
                                <BrowserRouter forceRefresh={true}>
                                <Routes>

                                    <Route path='/' element={ <ShowCataloPro/> }></Route>
                                    <Route path='/CatalogoProy/showProyect/:id' element={ <ShowProyect/> }></Route>
                                    <Route path='/CatalogoProy/create' element={ <CreateProyect/> }></Route>
                                    <Route path='/CatalogoProy/delect/:id' element={ <DelectProyect/> }></Route>
                                    <Route path='/CatalogoProy/update/:id' element={ <UpdateProyect/> }></Route>

                                    <Route path='/admin/:c' element={ <ShowListUser/> }></Route>
                                    <Route path='/admin/showUser/:id' element={ <ShowUser/> }></Route>
                                    <Route path='/admin/delect/:id' element={ <DelectUser/> }></Route>
                                    <Route path='/admin/update/:id' element={ <UpdateUser/> }></Route>

                                    <Route path='/user/:c' element={ <ShowListUser/> }></Route>
                                    <Route path='/user/showUser/:id' element={ <ShowUser/> }></Route>
                                    <Route path='/user/delect/:id' element={ <DelectUser/> }></Route>
                                    <Route path='/user/update/:id' element={ <UpdateUser/> }></Route>

                                    <Route path='/employ/:c' element={ <ShowListUser/> }></Route>
                                    <Route path='/employ/ShowUser/:id' element={ <ShowUser/> }></Route>
                                    <Route path='/employ/delect/:id' element={ <DelectUser/> }></Route>
                                    <Route path='/employ/update/:id' element={ <UpdateUser/> }></Route>
                                    
                                    <Route path='/Gerentes/:c' element={ <ShowListUser/> }></Route>
                                    <Route path='/Gerentes/showUser/:id' element={ <ShowUser/> }></Route>
                                    <Route path='/Gerentes/delect/:id' element={ <DelectUser/> }></Route>
                                    <Route path='/Gerentes/update/:id' element={ <UpdateUser/> }></Route>
                                
                                </Routes>
                                </BrowserRouter>
                            </>
            break;
        case 'G':
            builtRouter =   <>
                                <Main/>
                                <BrowserRouter forceRefresh={true}>
                                <Routes>

                                    <Route path='/' element={ <ShowCataloPro/> }></Route>
                                    <Route path='/CatalogoProy/showProyect/:id' element={ <ShowProyect/> }></Route>
                                    <Route path='/CatalogoProy/create' element={ <CreateProyect/> }></Route>
                                    <Route path='/CatalogoProy/delect/:id' element={ <DelectProyect/> }></Route>
                                    <Route path='/CatalogoProy/update/:id' element={ <UpdateProyect/> }></Route>

                                    <Route path='/user/:c' element={ <ShowListUser/> }></Route>
                                    <Route path='/user/showUser/:id' element={ <ShowUser/> }></Route>
                                    <Route path='/user/delect/:id' element={ <DelectUser/> }></Route>
                                    <Route path='/user/update/:id' element={ <UpdateUser/> }></Route>

                                    <Route path='/employ/:c' element={ <ShowListUser/> }></Route>
                                    <Route path='/employ/showUser/:id' element={ <ShowUser/> }></Route>
                                    <Route path='/employ/delect/:id' element={ <DelectUser/> }></Route>
                                    <Route path='/employ/update/:id' element={ <UpdateUser/> }></Route>

                                </Routes>
                                </BrowserRouter>
                            </>
            break;
        case 'E':
            builtRouter =   <>
                                <Main/>
                                <BrowserRouter forceRefresh={true}>
                                <Routes>
                                    <Route path='/' element={ <ShowCataloPro/> }></Route>
                                    <Route path='/CatalogoProy/showProyect/:id' element={ <ShowProyect/> }></Route>
                                    <Route path='/CatalogoProy/create' element={ <CreateProyect/> }></Route>
                                    <Route path='/CatalogoProy/delect/:id' element={ <DelectProyect/> }></Route>
                                    <Route path='/CatalogoProy/update/:id' element={ <UpdateProyect/> }></Route>

                                    <Route path='/user/:c' element={ <ShowListUser/> }></Route>
                                    <Route path='/user/showUser/:id' element={ <ShowUser/> }></Route>
                                    <Route path='/user/delect/:id' element={ <DelectUser/> }></Route>
                                    <Route path='/user/update/:id' element={ <UpdateUser/> }></Route>

                                    <Route path='/Proyecto'></Route>
                                    <Route path='/Proyecto/create'></Route>
                                    <Route path='/Proyecto/showProyect'></Route>
                                    <Route path='/Proyecto/delect/:id'></Route>
                                    <Route path='/Proyecto/update/:id'></Route>
                                </Routes>
                                </BrowserRouter>
                            </>
            break;
        case 'U':
            builtRouter =   <>
                                <Main/> 
                                <BrowserRouter forceRefresh={true}>
                                <Routes>
                                    <Route path='/' element={ <ShowCataloPro/> }></Route>
                                    <Route path='/CatalogoProy/showProyect/:id' element={ <ShowProyect/> }></Route>
                                    <Route path='/CatalogoProy/create' element={ <CreateProyect/> }></Route>
                                    <Route path='/CatalogoProy/delect/:id' element={ <DelectProyect/> }></Route>
                                    <Route path='/CatalogoProy/update/:id' element={ <UpdateProyect/> }></Route>
                                </Routes>
                                </BrowserRouter>
                            </>
            break;
        case 'D':
            builtRouter =   <>
                                <Main/>
                                <BrowserRouter forceRefresh={true}>
                                <Routes>
                                    <Route path='/user/create' element={ <CreacteUser/> }></Route>
                                    <Route path='/' element={ <IngreUser/> }></Route>
                                    <Route></Route>
                                </Routes>
                                </BrowserRouter>
                            </>
            break;
        default:
            break;
    }
    return builtRouter
}


