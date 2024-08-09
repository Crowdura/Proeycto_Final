import valUserAuth from "../valAuthFirebase/AuthUse.js"

export const valUserini = async (req, res) => {
    try{
        let textSta
        const valUserAuthO = new valUserAuth()
        await valUserAuthO.valStatusUser()
        const result = valUserAuthO.getStatus()
        console.log(result)
        if(result == 'A'){
            textSta = 'El usuario esta iniciado'
        }else if(result == 'D'){
            textSta = 'No esta ningun usuario iniciado'
        }

        res.json({
            message: textSta,
            statusUser: result
        })
    }catch(e){
        res.json({
            message: e.message
        })
    }
} 




