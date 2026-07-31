import express from "express"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT

const app = express()
app.use("/auth", proxy(process.env.AUTH_SERVICE))

app.listen(port, () => {
    console.log(`gateway started at ${port}`)
})