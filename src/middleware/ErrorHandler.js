export function ErrorHandler(err, req, res, next) {
    if (err){
        let error  = {}
        if(err.message == "Не правильний логін або пароль"){
            error.status = 401
        } else {
            error.status = 400
        }
        error.errorMessage = err.message
        res.json(
            error
        )
    }
}