import mongoose from "mongoose";
import config  from "config";
import Logger from "./logger";



async function connect(){
    const dbUri = config.get<string>("dbUri")
    try {
        await mongoose.connect(dbUri)  
        Logger.info("Connected")  
    } catch (e) {
        Logger.error("nao foi possivel conectar")
        Logger.error(`Erro: ${e}`)
        process.exit(1)
    }
}

export default connect