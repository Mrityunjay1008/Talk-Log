import express from 'express'
import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'
import chatRoutes from './routes/chatRoutes'
import messageRoutes from './routes/messageRoutes'
import { clerkMiddleware } from '@clerk/express'
import { errorHandler } from './middleware/errorHandler'

const app = express();

app.use(express.json())
app.use(clerkMiddleware())

app.get("/health",(_req,res)=>{
    res.status(200).json({status:"ok",message:"Server is running."})
})

app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)
app.use('/api/message',messageRoutes)

app.use(errorHandler)

export default app