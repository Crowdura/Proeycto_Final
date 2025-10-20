import { proyectModel } from "../model/proyectModel.js";
import { doc, getDoc, getDocs, updateDoc, deleteDoc, setDoc, query, where } from "firebase/firestore";

export const getAllProyect = async ( req, res ) => {
    let proyects = []
    const {key1, key2} = req.query
    console.log(key1 + key2)
    try{
        if(key2 == "A"){
            const proyectData = await getDocs(proyectModel)
            proyectData.forEach( (data) => {
                proyects.push({ ...data.data(), id:data.id })
            })
        }else{
            console.log('Entro en este luegar')
            const q = query(proyectModel, where("userAsing","==",key1))
            const proyectData2 = await getDocs(q)
            proyectData2 .forEach( (data) => {
                proyects.push({ ...data.data(), id:data.id })
            })
        }
        res.json(proyects)
    }catch(e){
        res.json({
            message: e.message
        })
    }
}

export const getProyect = async (req, res) => {
    
    try{
        const proyectRef = doc( proyectModel, req.params.id )
        const getProyect = await getDoc( proyectRef )
        res.json(getProyect.data())
    }catch(e){
        res.json({
            message: e.message
        })
    }
} 

export const createProyect = async (req, res) => {
    try{
        
        const proyectRef = doc( proyectModel )
        await setDoc(proyectRef, req.body)
        res.json({
            message: 'Se creo satisfatoriamente el proyecto'
        })
    }catch(e){
        res.json({
            message: e.message
        })
    }
}
export const updateProyect = async (req, res) => {
    try{
        let messg = ''
        const proyectRef = doc(proyectModel, req.params.id)
        const getProyect = await getDoc(proyectRef)
        if(getProyect.exists()){
            await updateDoc(proyectRef, req.body)
            messg= 'Se actualizo satisfatoriamente'
        }else{
            messg= 'No se pudo actualizar porque no existe el registro'
        }
        res.json({
            message: messg
        })
    }catch(e){
        res.json({
            message: e.message
        })
    }
} 
export const deleteProyect = async (req , res) => {
    try{
        let messg = ''
        const proyectRef = doc(proyectModel, req.params.id)
        const getProyect = await getDoc(proyectRef)
        if(getProyect.exists()){
            await deleteDoc(proyectRef)
            messg = 'Se elimino satifatoriamente el registro'
        }else{
            messg = 'No se pudo eliminar el registro porque no existe en la base de datos'
        }
        res.json({
            message: messg
        })
    }catch(e){
        res.json({
            message: e.message
        })
    }
}