import 'dotenv/config'

import { getFirestore } from 'firebase/firestore'

import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBSiVvxVTAaxB55wQJwKLU_7_3qhHPgIJM",
    authDomain: "proyect-app-jf.firebaseapp.com",
    projectId: "proyect-app-jf",
    storageBucket: "proyect-app-jf.appspot.com",
    messagingSenderId: "1032048095043",
    appId: "1:1032048095043:web:f8e46b6e20c88e3f4509f6",
    measurementId: "G-3BY9H91MFV"
  };

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export const auth = getAuth(app)

export default db