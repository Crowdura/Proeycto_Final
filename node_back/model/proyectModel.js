import db from "../database/db.js";
import { collection } from "firebase/firestore";

export const proyectModel = await collection( db, 'ProyectRegis')