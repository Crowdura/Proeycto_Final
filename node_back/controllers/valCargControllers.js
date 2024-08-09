import { valCargModel } from "../model/valCargModel.js";
import { doc, getDocs, deleteDoc, updateDoc, setDoc, getDoc} from "firebase/firestore";

export const getAllcargo = async (req, res) => {
    const cargs = []
    try{
        const cargos = await getDocs(valCargModel)
        cargos.forEach((data) => {
            cargs.push( { ...data.data(),  id:data.id} )
        }) 
        res.json(cargs)
    }catch(e){
        res.json({
            message: e.message
        })
        
    }

}

export const getCarg = async (req, res) => {
    try{
        let messg = ''
        const cargRef = doc( valCargModel,req.params.id )
        const getCarg = getDoc(cargRef)
        res.json(getCarg)

    }catch(e){
        res.json({
            message: e.message
        })
    }
}


export const updCarg = async (req, res) => {
    try{
        let message = ''
        const cargRef = doc( valCargModel, req.params.id)
        const getCarg = await getDoc( cargRef )
        if(getCarg.exists()){
            await updateDoc(cargoUdp, req.body)
            message = 'Se actualizo corretamente el cargo'
        }else{
            message = 'No se pudo actulizar el cargo porque no existe'
        }
        res.json({
            message: message
        })        
    }catch(e){
        res.json({
            message: error.message
        })
    }
}

export const deleteCarg = async (req, res) => {
    try{
        let messg = ""
        const cargRef = doc(valCargModel, req.params.id)
        const getCarg = await getDoc(cargRef)
        if(getCarg.exists()){
            await deleteDoc(cargDel)
            messg = 'Se elimino el mensaje satisfatoriamente'
        }else{
            messg = 'No se pudo eliminar el cargo por que no existe en la base de datos' 
        }
        res.json({
            message: messg
        })
        
    }catch(e){
        res.json({
            message: error.message
        })
    }
}

export const creatCarg = async (req, res) => {
    try{
        let messg = ''
        const cargRef = doc(valCargModel)
        await setDoc(cargRef, req.body)

        res.json({
            message: 'Se creo satisfatoriamente el cargo'
        })
    }catch(e){
        res.json({
            message: error.message
        })
    }
}