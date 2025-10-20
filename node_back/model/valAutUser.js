import db from "../database/db.js";

import { collection } from "firebase/firestore";

export const CargValMani = collection(db, 'cargValMani')