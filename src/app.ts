import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

// Middleware
app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Workign successfully 🙌')
})

export default app
