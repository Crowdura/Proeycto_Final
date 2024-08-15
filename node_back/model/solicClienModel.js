import db from "../database/db.js";
import { collection } from "firebase/firestore";

export const soliClienModel = collection( db, 'Id_SolicCli')