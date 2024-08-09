import db from "../database/db.js";
import { collection } from "firebase/firestore";

export const soliClienModel = await collection( db, 'Id_SolicCli')