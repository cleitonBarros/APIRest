import mongoose from "mongoose";
import config  from "config";


async function connect(){
    const dbUri = config.get<string>("dbUri")
    try {
        await mongoose.connect(dbUri)  
        console.log("Connected")  
    } catch (e) {
        console.log("nao foi possivel conectar")
        console.log(`Erro: ${e}`)
    }
}

export default connect