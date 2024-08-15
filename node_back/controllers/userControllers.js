import { UserModel } from "../model/userModel.js";
import { CargValMani } from "../model/valAutUser.js";
import { doc, getDocs, deleteDoc, updateDoc, setDoc, getDoc, query, where, DocumentReference} from "firebase/firestore";
import valUserAuth from "../valAuthFirebase/AuthUse.js";

export const getAlluserCarg = async (req, res) => {
    const {key1,Key2} = req.query
    console.log(Key2)
    try{
        const cargValManis = []
        const q = query(CargValMani, where("Cargo", "==", key1))
        const users = await getDocs(q)
        users.forEach((doc) => {
            cargValManis.push({ ...doc.data(), id:doc.id })
        })
        console.log(cargValManis)
        return getAlluser(res,Key2, cargValManis)
    }catch(e){
        console.error(e)
    }
} 

export const getAlluser = async (res,key2,cargValManis) => {
    const docs = []
    try {
        const valExisM = key2 in cargValManis[0].valMani
        if(valExisM){
            const result = Object.entries(cargValManis[0].valMani).find(([key, value]) => key === key2);
            
            const q = query(UserModel, where("cargo", "==", result[1]))
            const users = await getDocs(q)
            users.forEach((doc) => {
                docs.push({ ...doc.data(), id:doc.id })
            })
            console.log(docs)
            console.log(cargValManis)
        }else{
            res.json({
                message: "Este usuario no tiene el permiso nesesario"
            })
            return
        }
        res.json(docs)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getUser = async (req, res) => {
    try {
        const refDoc = doc( UserModel, req.params.id )
        const users = await getDoc(refDoc)
        res.json(users.data())
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const creatUser = async (req, res)=>{
    const authUse = new valUserAuth()
 //   console.log("afuera try" + req.body)
    const objprue = req.body
    try {
        const resAuth = await authUse.creatWhitEmailPassWord(req.body.email, req.body.password)
 //       console.log(authUse.type)
 //       console.log(authUse.userId)
        if(authUse.type !== 'E'){
//            console.log('Entro')
//            console.log(objprue)
            objprue.refCuenta = authUse.userId
 //           console.log('Entro 2')
//            console.log(objprue)
           // console.log(req.body)
//           console.log(res)
           // res.json({
                
            //}) 
            return await setDoc(doc( UserModel ), objprue)
        }else{
            res.json({
                message: resAuth.Messg
            })
        }
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}


export const updateUser = async (req, res)=>{
    try {
        const docRef = doc( UserModel, req.params.id )
        await updateDoc( docRef, req.body)
        res.json({
            message: 'Se actualizo satisfatoriaente'
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const deleteUser = async (req, res) =>{
    try {
        const docRef = doc( UserModel, req.params.id )
        console.log(docRef)
        const docdata = await getDoc( docRef )
        if (docdata.exists()) {
            await deleteDoc(docRef)
            res.json({
                message: 'Se elimino el usuario'
            })
        } else {
            res.json({
                message: 'El usuario no existe'
            })
        }
           
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}