import { getAuth } from "firebase-admin/auth"
import { app } from "../config/firebase.js"
import User from "../models/user.model.js"
import { createConnection } from "mongoose"

export const login = async (req, res) => {
    try {
        const { token } = req.body
        const decoded = await getAuth(app).verifyIdToken(token)
        let user  = await User.findOne({
            firebaseId: decoded.uid
        })

        if (!user) {
            user = await User.create({
                firebaseId: decoded.uid,
                name: decoded.name,
                email: decoded.email,
                avatar: decoded.picture
            })
        }

        const sessionId = crypto.randomUUID()

         res.cookie("session", sessionId, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json(user)
    }

    catch (error) {
        return res.status(500).json({ message: `login error ${error}` })
    }
}

export const logout  = async (req, res) => {
    try {
        const sessionId = req.cookies?.session
        res.clearCookie("session")
        return res.status(200).json({ message: "logout successful" })

    }
    catch (error) {
        return res.status(500).json({ message: `logout error ${error}` })
    }
}
