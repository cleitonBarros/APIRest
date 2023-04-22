import express  from "express";
import config  from "config";
import router from "./router";

const app = express();
//json middleware
app.use(express.json())

app.use("/api/", router)

//porta
const port = config.get<number>('port');
app.listen(port, async ()=>{
    console.log(`http://localhost:${port}`)
});