import express from 'express'
import { getAlluserCarg, getUserData, getUser, updateUser, deleteUser, creatUser} from '../controllers/userControllers.js'
import { getAllcargo, getCarg, creatCarg, deleteCarg, updCarg  } from '../controllers/valCargControllers.js'
import { createSolicClient, deleteSolicClient, getAllsolicClient, getSolicClient, updateSolicClient } from '../controllers/solicClien.js'
import { createProyect, deleteProyect, getAllProyect, getProyect, updateProyect } from '../controllers/proyectControllers.js'
import { valUserini } from '../controllers/valUserini.js'
import { closeUserSession, creatUserGoogle, ingreUserBase } from '../controllers/userAction.js'

export const routerUser = express.Router()
export const routerCarg = express.Router()
export const routerSolicClient = express.Router()
export const routerProyect = express.Router()
export const routerVal = express.Router()
export const routerUserAction = express.Router()

//configuración de router solicitud del cliente
routerSolicClient.get('/', getAllsolicClient)
routerSolicClient.get('/:id', getSolicClient)
routerSolicClient.post('/', createSolicClient)
routerSolicClient.put('/:id', updateSolicClient)
routerSolicClient.delete('/:id', deleteSolicClient)

//configuración de router proyectos
routerProyect.get('/', getAllProyect)
routerProyect.get('/:id', getProyect)
routerProyect.post('/', createProyect)
routerProyect.put('/:id', updateProyect)
routerProyect.delete('/:id', deleteProyect)

//configuración de router para cargos
routerCarg.get('/', getAllcargo)
routerCarg.get('/:id', getCarg)
routerCarg.post('/', creatCarg)
routerCarg.put('/:id', updCarg)
routerCarg.delete('/:id', deleteCarg)

//configuración de router de Usuario
routerUser.get('/', getAlluserCarg)
routerUser.get('/data', getUserData)
routerUser.get('/:id', getUser)
routerUser.post('/', creatUser)
routerUser.delete('/:id', deleteUser)
routerUser.put('/:id', updateUser)

//configuración de router usuario action
routerUserAction.get('/longOut', closeUserSession)
routerUserAction.get('/IngreUser', ingreUserBase)
routerUserAction.post('/GoogleAuth', creatUserGoogle)

//configuración de router para validaciones
routerVal.get('/', valUserini)
