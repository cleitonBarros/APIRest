import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieController";
import {validate} from './middleware/handleValidator'

const router = Router()

export default router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Api funcionando")
}).post("/movie", validate, createMovie)