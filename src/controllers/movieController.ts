import { Response, Request } from "express";
import Logger from "../../config/logger";
import { MovieModel } from "../models/Movie";

export async function createMovie(req: Request, res: Response){
    try {
        const data = req.body
        const movie = await MovieModel.create(data);
        //201 algo foi criado
        return res.status(201).json(movie)
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
    }
}