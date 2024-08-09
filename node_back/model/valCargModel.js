import db from "../database/db.js";

import { collection } from "firebase/firestore";

export const valCargModel = await collection(db, 'conf_cargo')

