import {Router} from 'express'
import userService from '../Service/userService.js'

const userRouter = Router();

userRouter.post('/newuser',userService.createUser)
userRouter.post('/login',userService.loginUser)
userRouter.get('/users',userService.getUsers)
export default userRouter