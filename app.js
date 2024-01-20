import express from "express"
import { flowersRouter } from "./routes/flowers.js"
export const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(flowersRouter)

// error handling should always go last to catch any errors thrown by controllers
// express treats anything with error as the first arg as error handling middleware
app.use((error, req, res, next) => {
  if (!error.statusCode) error.statusCode = 500;
  console.error(`Sending error response with status code ${error.statusCode} and error: ${error.toString()}`)
  return res.status(error.statusCode).json({ error: error.toString() });
});

