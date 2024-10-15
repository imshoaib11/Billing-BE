import { Router } from 'express'
import billingRoute from './billingRoutes.js'
import userRouter from './userRoute.js'
import dailyRouter from './dailyRoutes.js';
const router = Router();

router.use('/bills',billingRoute)
router.use('/user',userRouter)
router.use('/',dailyRouter)

export default router