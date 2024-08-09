import db from "../database/db.js"

import { collection } from "firebase/firestore"

export const UserModel = await collection(db, 'usuarios')