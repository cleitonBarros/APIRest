import {body} from 'express-validator'
import { Request } from 'express'

export const moveCreateValidate = () =>{
    return[
        body("title")
            .isString()
            .withMessage("o titulo é obrigatorio")
            .isLength({min: 5})
            .withMessage("Ter no minimo 5 caracteres"),

        body("rating")
            .isNumeric()    
            .withMessage("a nota precisa Precisar ser um numero")
            .custom((value: any)=>{
                if(value < 0 || value > 10){
                    throw new Error("A nota precisa ser entra 0 e 10")
                }
                return true
            }),
        body('description')
            .isString()
            .withMessage("A descrição é obrigatoria")
            .isLength({min: 10}),
        body('director')
            .isString()
            .withMessage("O nome do diretor é obrigatoria"),
        body("poster")
            .isURL()
            .withMessage("imagem precisa se rum url"),
        
    ]
}