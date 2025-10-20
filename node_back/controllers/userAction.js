import { getIdToken, signInWithEmailAndPassword } from "firebase/auth";
import valUserAuth from "../valAuthFirebase/AuthUse.js";
import { auth } from "../database/db.js";
import Cookies from "universal-cookie";

export const ingreUserBase = async (req, res) => {
    const cookie = new Cookies()
    if(!req.headers.authorization || req.headers.authorization.indexOf('Basic') === -1){
        return res.status(401).json({ message: 'No se autentico ninguna autorización' })
    }
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
    const [ userName, password ] = credentials.split(':')
    try{
        await signInWithEmailAndPassword(auth, userName, password )
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
    }catch(e){
        res.json({
            message: e.message
        })
    }
} 

export const ingreUserGoogle = async (req, res) => {
    try{
        const authUser = new valUserAuth()
        const result =  authUser.GoolgleAuth()
        if(result !== 'A')
        res.json({
            message: 'Se inicio sesión satisfatoriamente'
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
            message: 'Se ingreso sesión satisfatoriamente'
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
            window.location.href = '/';
        }else{
            messg = 'No se pudo cerrar sesión'
        }
        console.log(messg)
        res.json({
            message: messg
        })
    }catch(e){
        res.json({
            message: e.message
        })
    }
}
