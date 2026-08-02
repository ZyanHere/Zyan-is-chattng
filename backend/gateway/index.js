import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import proxy from "express-http-proxy"
import { proxyWithHeader } from "./utils/proxyWithHeader.js"
dotenv.config()

const port = process.env.PORT

const app = express()
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(cookieParser())
app.use("/auth", proxy(process.env.AUTH_SERVICE))
app.use("/chat", proxyWithHeader(process.env.CHAT_SERVICE))
app.get("/api/me",protect,getCurrentUser)
app.get("/",(req,res)=>{
    res.json({message:"hello from gateway v5"})
})

app.listen(port, () => {
    console.log(`gateway started at ${port}`)
})