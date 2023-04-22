require('dotenv').config()
import express  from "express";
import config  from "config";
import router from "./router";
import  db from "../config/db";

const app = express();
//json middleware
app.use(express.json())

app.use("/api/", router)

//porta
const port = config.get<number>('port');
app.listen(port, async ()=>{
    await db()
    console.log(`http://localhost:${port}`)
});