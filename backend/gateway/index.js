import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
dotenv.config()

const port = process.env.PORT

const app = express()
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(cookieParser())
app.use("/auth", proxy(process.env.AUTH_SERVICE))

app.listen(port, () => {
    console.log(`gateway started at ${port}`)
})