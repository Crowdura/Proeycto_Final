import db from "../database/db.js";

import { collection } from "firebase/firestore";

export const valCargModel = collection(db, 'conf_cargo');

