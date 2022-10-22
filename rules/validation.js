const Joi = require('joi')


const RegValidation = (data) => {


    const schema = Joi.object().keys({
        fullname: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        tokeen: Joi.string().min(6).required(),
        phone: Joi.string().min(10).required(),
        password: Joi.string().min(6).required()
    })

    // VALIDATE USER INPUT DATA
    return schema.validate(data)
}



const LoginValidation = (data) => {
    const schema = Joi.object().keys({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })

    // VALIDATE USER INPUT DATA
    return schema.validate(data)
}



const TokenValidation = (data) => {
    const schema = Joi.object().keys({
        tokeen: Joi.string().min(12).required(),
        status: Joi.required()
    })

    // VALIDATE TOKeN INPUT DATA
    return schema.validate(data)
}


const LandsValidation = (data) => {
    const schema = Joi.object().keys({
        tokeen: Joi.string().min(12).required(),
        phone:Joi.string().min(10).required(),
        plots:Joi.string().required(),
        postedBy:Joi.string().min(5).required(),
        state:Joi.string().min(3).required(),
        city:Joi.string().min(3).required(),
        community:Joi.string().required(),
        message:Joi.string().min(10).required(),
        image:Joi.string().required(),
    })

    // VALIDATE TOKeN INPUT DATA
    return schema.validate(data)
}


module.exports = { LoginValidation, RegValidation , TokenValidation, LandsValidation}