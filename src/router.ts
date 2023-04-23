import { Router, Request, Response } from "express";
import { getMovieById, createMovie, getAllMovie, removeMovie, UpdateMovie } from "./controllers/movieController";
import {validate} from './middleware/handleValidator'
import { moveCreateValidate } from "./middleware/movieValidation";

const router = Router()

export default router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Api funcionando")
})
.post("/movie", moveCreateValidate(), validate, createMovie)
.get("/movie/:id", getMovieById)
.get("/movie",getAllMovie)
.delete("/movie/:id",removeMovie)
.patch("/movie/:id",moveCreateValidate(), validate, UpdateMovie)
