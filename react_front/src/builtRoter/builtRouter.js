import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../main/main';
import CreacteUser from '../modulos/user/createUser';
import DelectUser from '../modulos/user/delectUser';
import UpdateUser from '../modulos/user/updateUser';
import ShowListUser from '../modulos/user/showListUser';
import ShowUser from '../modulos/user/showUser';
import VistaPrin from '../modulos/Principal/principal';
import IngreUser from '../modulos/user/ingreUser';

export const BuiltRouter = (stUser) => {
    let builtRouter
    switch (stUser) {
        case 'A':
            builtRouter =   <div className='App'>
                                <Main/>
                                <BrowserRouter>
                                <Routes>
                                    <Route path='/' element={ <VistaPrin/> }></Route>
                                    <Route path='/user/' element={ <ShowListUser/> }></Route>
                                    <Route path='/user/create' element={ <CreacteUser/> }></Route>
                                    <Route path='/user/showuser/:id' element={ <ShowUser/> }></Route>
                                    <Route path='/user/delect/:id' element={ <DelectUser/> }></Route>
                                    <Route path='/user/update/:id' element={ <UpdateUser/> }></Route>
                                    
                                    <Route path='/Catalogo'></Route>
                                    <Route path='/Catalogo/create'></Route>
                                    <Route path='/Catalogo/showCatalogo'></Route>
                                    <Route path='/Catalogo/delect/:id'></Route>
                                    <Route path='/Catalogo/update/:id'></Route>
                                
                                    <Route path='/Proyecto'></Route>
                                    <Route path='/Proyecto/create'></Route>
                                    <Route path='/Proyecto/showProyect'></Route>
                                    <Route path='/Proyecto/delect/:id'></Route>
                                    <Route path='/Proyecto/update/:id'></Route>
                                </Routes>
                                </BrowserRouter>
                            </div>
            break;
        case 'G':
            break;
        case 'E':
            break;
        case 'U':
            break;
        case 'D':
            builtRouter =   <div className='App'>
                                <Main/>
                                <BrowserRouter>
                                <Routes>
                                    <Route path='/' element={ <VistaPrin/> }></Route>
                                    <Route path='/user/create' element={ <CreacteUser/> }></Route>
                                    <Route path='/user/ingre' element={ <IngreUser/> }></Route>
                                    <Route></Route>
                                </Routes>
                                </BrowserRouter>
                            </div> 
            break;
        default:
            break;
    }
    return builtRouter
}


