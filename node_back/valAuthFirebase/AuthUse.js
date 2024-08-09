import { auth } from "../database/db.js";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from "firebase/auth";
class valUserAuth {
    constructor(){
        this.auth = auth
        this.valStatus
    }
    async creatWhitEmailPassWord (email, password) {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
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
    async valStatusUser () {
        onAuthStateChanged(auth, (user)=>{
            if(user){
                const uid = user.id
                console.log(uid)
                this.valStatus = 'A'
                
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
            return status
        }catch(e){
            status = 'E'
            return status
        }
    }
    GoolgleAuth (auth) {
        this.auth = auth    
    }
    getStatus() {
        return this.valStatus
    }

}

export default valUserAuth