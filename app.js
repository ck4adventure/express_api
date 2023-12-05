import express from "express"
import { flowersRouter } from "./routes/flowers.js"
export const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(flowersRouter)

