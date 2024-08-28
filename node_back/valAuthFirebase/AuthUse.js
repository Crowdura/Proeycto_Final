import db,{ auth } from "../database/db.js";
import { doc, getDoc,getDocs, query, where, collection} from "firebase/firestore";
import { UserModel } from "../model/userModel.js";
import { valCargModel } from "../model/valCargModel.js";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
class valUserAuth {

    constructor(){
        this.auth = auth
        this.valStatus
        this.cargoId
        this.userId
        this.initStatus = false
        this.type

    }
    async creatWhitEmailPassWord (email, password) {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            this.type = "S"
            this.userId = userCredential.user.uid
            return userId
        })
        .catch((error) => {
            console.error(error.code)
            return { type: "E", Messg: error.code }
        })
    }
    async longWhitEmailPassWord (email, password) {
        try{
            const userCredential = await signInWithEmailAndPassword( this.auth, email, password)
            console.log(userCredential.user)
        }catch(e){
            console.log(e)
        }
    }
    async valUidUser () {
        onAuthStateChanged(auth, async (user)=>{
            if(user && this.type != 'E'){
                console.log('Inicio')
                const uid = user.uid
                let cargoId = ''
                let userId  = ''
                const q = query(collection(db, "usuarios"), where("refCuenta", "==", uid))
                getDocs(q)
                .then((docSnap) => {
                    if(docSnap){
                        docSnap.forEach((doc) => {
                            cargoId = doc.data().cargo
                            userId  = doc.id
                        })
                        this.cargoId = cargoId
                        this.userId  = userId
                        this.status = 'A'
                        console.log(this.cargoId)
                        return getDoc(doc(db, "conf_cargo", this.cargoId))
                    }else{
                        console.log("No such document!");
                    }
                }).then((doc) => {
                    switch (doc.data().cargo) {
                        case "A":
                            this.valStatus = 'A'
                            break;
                        case "G":
                            this.valStatus = 'G'
                            break;   
                        case "U":
                            this.valStatus = 'U'
                            break;
                        case "E":
                            this.valStatus = 'E'
                            break;                                    
                        default:
                            break;
                        }
                    })
                    .catch((error) => {
                        console.error("Error getting document:", this.cargoId);
                    })
                .catch((error) => {
                    console.error("Error getting document:", this.cargoId);
                });
            }else{
                this.valStatus = 'D'              
            }
        })
    }

    async longout () {
        let status
        try{
            await signOut(this.auth)
            status = 'A'
            this.initStatus = false
            return status
        }catch(e){
            status = 'E'
            this.initStatus = true
            return status
        }
    }
    
    async delectUser(uid){
        try{
            this.auth.delectUser(uid)
        }catch(e){

        }
    }

    GoolgleAuth (auth) {
        this.auth = auth    
    }
    
    getStatus() {
        return this.valStatus
    }

    
    getUserId() {
        return this.userId
    }

    getCargoId() {
        return this.cargoId
    }
}

export default valUserAuth