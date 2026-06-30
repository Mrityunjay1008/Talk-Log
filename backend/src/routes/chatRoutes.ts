import express from 'express'
import { protectRoute } from '../middleware/auth'
import { getChats, getOrCreateChat } from '../controllers/chatController'

const router = express.Router()

router.use(protectRoute)

router.get('/',getChats)
router.get('/with/:participantId',getOrCreateChat)

export default router;