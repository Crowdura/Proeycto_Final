import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import { TableB, TbodyB, Tdb, ThB, TheadB, TrbB, TrhB } from "../../../component/ui/table.js";

const URI = `${ process.env.REACT_APP_API_URL }/usuarios/`
const URIS = `${ process.env.REACT_APP_API_URL }/valUser`

const ShowListUser = () => {
    const[ dataD, setData ] = useState([])
    const[ staUser, setStaUser ] = useState('')
    const[ refrTab, setFrTab] = useState(false)

    const navigate = useNavigate()

    const {c} = useParams()

    const valData = async () => {
        try{
            const resSt = await axios.get(URIS)
            if(resSt.status == 200){
                setStaUser(resSt.data.statusUser)
            }
        }catch(e){
            console.error(e)
        }
    }

    const getdata = async () => {
        const docs = []
        try{
            if(staUser){
                console.log(c)
                const params = {
                    key1: staUser,
                    Key2: c
                }
                console.log(c)
                const res = await axios.get(URI,{ params })
                console.log(res.data)
                res.data.forEach(element => {
                    docs.push({'id': element.id, 'Name':element.Name, 'lastName':element.lastName, 'tel':element.tel, 'email':element.email, 'andress':element.andress, 'user':element.user})    
                })
                setData(docs)
            }

        }catch(e){
            console.error(e)
        }
    }

    useEffect(() => {
        valData()
    }, [])

    useEffect(() => {
        getdata()
    },[staUser])


    return( 
            <>
                <div className="divCont bg-blue-950 justify-center items-center h-auto">
                    <section className="gradient-form h-screen w-full bg-neutral-200 dark:bg-neutral-700">
                        <div className="p-5 overflow-auto rounded-lg hidden md:block">
                            <TableB>
                                <TheadB>
                                    <TrhB>
                                        <ThB>Nombre</ThB>
                                        <ThB>apellido</ThB>
                                        <ThB>Usuario</ThB>
                                        <ThB>email</ThB>
                                        <ThB>tel</ThB>
                                        <ThB>dirección</ThB>
                                        <ThB>acciones del usuario</ThB>
                                    </TrhB>
                                </TheadB>
                                <TbodyB>
                                        { dataD.map( doc => {
                                            return  <TrbB key={ doc.id }>
                                                        <Tdb>{ doc.Name }</Tdb>
                                                        <Tdb>{ doc.lastName }</Tdb>
                                                        <Tdb>{ doc.user }</Tdb>
                                                        <Tdb>{ doc.email}</Tdb>
                                                        <Tdb>{ doc.tel}</Tdb>
                                                        <Tdb>{ doc.andress}</Tdb>
                                                        <Tdb>
                                                            <button onClick={ () => navigate(`/user/update/${ doc.id }`)} className=" bg-slate-950 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded " style={{ padding: '10px', margin: '1%' }}>
                                                                <svg  className="h-5 w-5 text-slate-600"  width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                                            </button>
                                                            <button onClick={ () => navigate(`/user/delect/${ doc.id }`) } className=" bg-slate-950 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded " style={{ padding: '10px', margin: '1%'   }}>
                                                                <svg  className="h-5 w-5 text-slate-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                                                            </button>
                                                            <button onClick={ () => navigate(`/user/showUser/${ doc.id }`) } className=" bg-slate-950 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded " style={{ padding: '10px', margin: '1%'   }}>
                                                                <svg className="h-5 w-5 text-slate-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />  <polyline points="14 2 14 8 20 8" />  <line x1="16" y1="13" x2="8" y2="13" />  <line x1="16" y1="17" x2="8" y2="17" />  <polyline points="10 9 9 9 8 9" /></svg>
                                                            </button>
                                                        </Tdb>
                                                    </TrbB>
                                        })}
                                </TbodyB>
                            </TableB>
                        </div>
                        <div className="p-3 grid gird-cols-1 gap-4 md:hidden">
                        { dataD.map( doc => {
                            return <div className=" bg-blue-950 p-4 rounded-lg shadow">
                                        <a>Usuario</a>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col w-auto h-auto">
                                                <label className="text-slate-400">
                                                    Id
                                                </label>
                                                <a>{doc.id}</a>
                                            </div>
                                            <div className="flex flex-col w-auto h-auto">
                                                <label className="text-slate-400">
                                                    Nombre
                                                </label>
                                                {doc.Name}
                                            </div>
                                            <div className="flex flex-col w-auto h-auto">
                                                <label className="text-slate-400">
                                                    apellido
                                                </label>
                                                <a>{doc.lastName}</a>
                                            </div>
                                            <div className="flex flex-col w-auto h-auto">
                                                <label className="text-slate-400">
                                                    Usuario
                                                </label>
                                                <a>{doc.user}</a>
                                            </div>
                                            <div className="flex flex-col w-auto h-auto">
                                                <label className="text-slate-400">
                                                    email
                                                </label>
                                                <a>{doc.email}</a>
                                            </div>
                                            <div className="flex flex-col w-auto h-auto">
                                                <label className="text-slate-400">
                                                    tel
                                                </label>
                                                <a>{doc.tel}</a>
                                            </div>
                                            <div className="flex flex-col w-auto h-auto">
                                                <label className="text-slate-400">
                                                    dirección
                                                </label>
                                                <a>{doc.andress}</a>
                                            </div>
                                            <div className="flex flex-col w-auto h-auto">
                                                <label className="text-slate-400">
                                                    acciones del usuario
                                                </label>
                                                <button onClick={ () => navigate(`/user/update/${ doc.id }`)} className=" items-center bg-slate-950 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded " style={{ padding: '10px', margin: '1%' }}>
                                                    <svg  className="justify-center h-5 w-5 text-slate-600"  width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                                </button>
                                                <button onClick={ () => navigate(`/user/delect/${ doc.id }`) } className=" items-center bg-slate-950 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded " style={{ padding: '10px', margin: '1%'   }}>
                                                    <svg  className="justify-center h-5 w-5 text-slate-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                                                </button>
                                                <button onClick={ () => navigate(`/user/showuser/${ doc.id }`) } className=" items-center bg-slate-950 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded " style={{ padding: '10px', margin: '1%'   }}>
                                                    <svg className="justify-center h-5 w-5 text-slate-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />  <polyline points="14 2 14 8 20 8" />  <line x1="16" y1="13" x2="8" y2="13" />  <line x1="16" y1="17" x2="8" y2="17" />  <polyline points="10 9 9 9 8 9" /></svg>
                                                </button>                                            
                                            </div>                                   
                                        </div>
                                    </div>                                
                        })}
                        </div>
                    </section>
                </div>
            </>
    )
}

export default ShowListUser