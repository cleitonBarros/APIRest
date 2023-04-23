import { Request, Response, NextFunction } from "express";
import { validationResult, Result } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors: Result = validationResult(req)
    console.log(errors)
    if(errors.isEmpty()){
        return next()
    }
    const extratectErrors: object[] = []
    
    errors.array().map(err => extratectErrors.push({ [err.path] : err.msg }))
    return res.status(422).json({
        errors: extratectErrors
    })
}