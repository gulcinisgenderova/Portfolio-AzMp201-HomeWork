import express from 'express'
import { createUsers, deleteUser, getUser, getUsers, updateUsers } from '../Controller/UserController.js'
export const userRouter = express.Router()

userRouter.get('/',  getUsers)
userRouter.get('/:id',   getUser)
userRouter.post('/',  createUsers)
userRouter.put('/:id',   updateUsers)
userRouter.delete('/:id',   deleteUser)