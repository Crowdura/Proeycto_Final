import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import '../node_back/database/db.js'
import { routerCarg, routerProyect, routerSolicClient, routerUser, routerUserAction, routerVal } from "./routers/routers.js";

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/usuarios', routerUser)
app.use('/userAction', routerUserAction)
app.use('/cargo', routerCarg)
app.use('/proyecto', routerProyect)
app.use('/soliCliente', routerSolicClient)
app.use('/valUser', routerVal)

app.listen(8000, () => {
    console.log(`Server en escucha port ${ 8000 }`)
})