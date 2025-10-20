import { doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { soliClienModel } from "../model/solicClienModel.js";

export const getAllsolicClient = async (req, res) => {
    let solicClients = []
    try{
        const getAllSolicClient = await getDocs( soliClienModel )

        getAllSolicClient.forEach((data) => {
            solicClients.push({ ...data.data(), id:data.id })
        })
        res.json(solicClients)
    }catch(e){
        res.json({
            message: e.message
        })
    }

} 

export const getSolicClient = async (req, res) => {
    try{
        const solicClienRef = doc( soliClienModel, req.params.id )
        const getSolicClient = await getDoc(solicClienRef)
        res.json(getSolicClient)
    }catch(e){
        res.json({
            message: e.message
        })
    }
    
} 

export const createSolicClient = async (req, res) => {
    try{
        const solicClienRef = doc(soliClienModel)
        await setDoc(solicClienRef)
        res.json({
            message: 'Se creo el registro satisfatoriamente'
        })
    }catch(e){
        res.json({
            message: e.message
        })
    }

}

export const updateSolicClient = async (req, res) => {
    try{
        let messg = ''
        const solicClienRef = doc(soliClienModel, req.params.id)
        const getSolicClient = await getDoc(solicClienRef)
        if(getSolicClient.exists()){
            await updateDoc(solicClienRef, req.body)
            messg = 'Se actualizo satisfatoriamente' 
        }else{
            messg = 'No se pudo actualizar el registro'
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

export const deleteSolicClient = async (req, res) => {
    try{
        let messg = ''
        const solicClienRef = doc(soliClienModel, req.params.id)
        const getSolicClient = await getDoc(solicClienRef)
        if(getSolicClient.exists()){
            await deleteDoc(solicClienRef)
            messg = 'Se elimino satisfatoriamenet'
        }else{
            messg = 'No se pudo eliminar el registro ya que no existe'
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