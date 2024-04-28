

const validator = (validationSchema, additionalValid=()=>'') => (req, res, next) =>  {
    const {body} = req
    const validResult =  validationSchema.validate(body)
    
    if (validResult.error){
        next(new Error(validResult.error.message))
    } else {
        const addError = additionalValid(req)
        if(addError){
            next(new Error(addError))
        }
    }

    next()
}

export {validator }