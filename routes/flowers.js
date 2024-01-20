import express from "express"
export const flowersRouter = express.Router()
import { getFlowers, resolveShareQuery, createFlowers } from "../controllers/flowers.js"

flowersRouter.get('/flowers', getFlowers)
flowersRouter.post('/flowers/create', createFlowers)
flowersRouter.post('/flowers/share', resolveShareQuery)
