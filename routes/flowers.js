import express from "express"
export const flowersRouter = express.Router()
import { resolveShareQuery } from "../controllers/flowers.js"

flowersRouter.post('/flowers/share', resolveShareQuery)