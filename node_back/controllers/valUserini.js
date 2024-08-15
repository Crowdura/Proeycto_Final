import valUserAuth from "../valAuthFirebase/AuthUse.js"

const valUserAuthO = new valUserAuth()
export const valUserini = async (req, res) => {
    try{
        let textSta
        await valUserAuthO.valUidUser()
        const result = valUserAuthO.getStatus()
        const resultCargId = valUserAuthO.getCargoId()
        const userId = valUserAuthO.getUserId()
        switch (result) {
            case 'A':
                textSta = 'El usuario Administrador esta iniciado'
                break;
            case 'G':
                textSta = 'El usuario Gerente esta iniciado'
                break;
            case 'E':
                textSta = 'El usuario Empleado esta iniciado'
                break;
            case 'U':
                textSta = 'El usuario Usuario esta iniciado'
                break;
            case 'D':
                textSta = 'No esta ningun usuario iniciado'
                break;
            default:
                break;
        }
        res.json({
            message: textSta,
            statusUser: result,
            cargoId: resultCargId,
            userId : userId
        })
    }catch(e){
        res.json({
            message: e.message
        })
    }
} 




