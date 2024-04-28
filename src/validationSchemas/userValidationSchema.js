import Joi from 'joi'
import fs from 'fs'

const userSignValidationSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
        .required(),
    
    email: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'))

}).required()

function userSignValidation(req) {
    const {body} = req
    const data = fs.readFileSync('users.json', 'utf8');
    if (JSON.parse(data).users.some(elem => elem.username == body.username))
        return "Ім'я такого юзера зайнято"
}

const userLoginValidationSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
        .required()

}).required()


export {userSignValidationSchema, userSignValidation, userLoginValidationSchema}