import { Router } from "express";
import fs from 'fs';
import {validator} from '../middleware/validationMiddleware.js'
import { userSignValidationSchema, userSignValidation, userLoginValidationSchema } from "../validationSchemas/userValidationSchema.js";
import bcrypt from 'bcrypt'




const userRouter = new Router()




userRouter.post('/signup', validator(userSignValidationSchema, userSignValidation), (req, res) => {
        fs.readFile('users.json','utf8', (err, data) => {
            const {body} = req
            const saltRounds = 10
            bcrypt.hash(body.password, saltRounds, function(err, hash) {
                body.password = hash
                const currentFile = JSON.parse(data)
                currentFile.users.push(body)
                fs.writeFile('users.json', JSON.stringify(currentFile), (err) => {});
                res.send("signup complete")
            });
        });
    
});

userRouter.post('/signin', validator(userLoginValidationSchema), async (req, res, next) => {
    const {body} = req
    const data = fs.readFileSync('users.json', 'utf8');
    await bcrypt.compare(body.password, JSON.parse(data).users.filter(elem => elem.username == body.username)[0].password, function(err, result) {
        if (!JSON.parse(data).users.some(elem => elem.username == body.username) || !result){
            next(new Error("Не правильний логін або пароль"))
        }
        else {
            res.send("signin complete")
        }
    });
    
});


export {userRouter}