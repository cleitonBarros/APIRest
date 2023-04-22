const dbUser = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD

export default {
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.9a3jgrm.mongodb.net/APIRESTFULLcomTS?retryWrites=true&w=majority`,
}