import express from 'express'
import { protectRoute } from '../middleware/auth';
import { getMessages } from '../controllers/messageController';

const router = express.Router()

router.get('/chat/:chatId',protectRoute,getMessages)

export default router;