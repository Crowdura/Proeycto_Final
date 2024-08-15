import db from "../database/db.js";

import { collection } from "firebase/firestore";

export const UserModel = collection(db, 'usuarios');