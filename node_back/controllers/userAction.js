import { signInWithEmailAndPassword } from "firebase/auth";
import valUserAuth from "../valAuthFirebase/AuthUse.js";
import { auth } from "../database/db.js";

export const ingreUserBase = async (req, res) => {
    console.log(req.body)
    console.log(req.boby.email)
    await signInWithEmailAndPassword(auth, req.auth.username, req.auth.password )
    .then((userCredential) => {
        const user = userCredential.user
        res.json({
            message: 'Se inicio sesión'
        })
    })
    .catch((e) => {
        res.json({
            message: e.message
        })
    })

} 

export const ingreUserGoogle = async (req, res) => {
    try{
        const authUser = new valUserAuth()
        const result =  authUser.GoolgleAuth()
        if(result !== 'A')
        res.json({
            message: 'Se salio satisfactoriamente'
        })
    }catch(e){
        res.json({
            message: e.message
        })
    }
}

export const creatUserGoogle = async (req, res) => {
    try{
        const authUse = new valUserAuth()
        authUse.GoolgleAuth(req.body.authGoogle)
        res.json({
            message: 'Se inicio sesión satisfatoriamente'
        })

    }catch(e){
        res.json({
            message: e.message
        })
    }
}

export const closeUserSession = (req, res) => {
    try{
        const messg = ''
        const authUser = new valUserAuth()
        const result =  authUser.longout()
        if(result == 'A'){
            messg = 'Se cerro satisfatiriamente' 
        }else{
            messg = 'No se pudo cerrar sección'
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
