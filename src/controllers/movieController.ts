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
        return res.status(500).json({error: "tenta mais tarde"})
    }
}

export async function getMovieById(req: Request, res: Response){
    try {
        const id: String = req.params.id
        const movie = await MovieModel.findById(id)
        if(!movie){
            return res.status(404).json({error: "o filme nao existe"})
        } 
        return res.status(200).json(movie)
        
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
    }
}

export async function getAllMovie(req: Request, res: Response){
    try {
        const movie = await MovieModel.find()
        return res.status(200).json(movie)
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`) 
    }
}

export async function removeMovie(req: Request, res: Response){
    try {
        const id = req.params.id
        const movie = await MovieModel.findById(id)
        if(!movie){
            return res.status(404).json({error: "o filme nao existe"})
        } 
        await movie.deleteOne({_id:id})
        return res.status(200).json({msg: "filme removido com sucesso"})
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`) 
        
    }
}

export async function UpdateMovie(req: Request, res: Response){
    try {
        const id = req.params.id
        const data = req.body
        const movie = await MovieModel.findById(id)
        if(!movie){
            return res.status(404).json({error: "o filme nao existe"})
        } 
        await MovieModel.findByIdAndUpdate({_id:id}, data)

        return res.status(200).json(data)
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`) 
        
    }
}