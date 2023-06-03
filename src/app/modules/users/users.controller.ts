import { Request, Response } from 'express'
import usersService from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)
    res.send(200).json({
      sucess: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (err) {
    res.send(400).json({
      sucess: false,
      message: 'Failed to create user',
    })
  }
}

export default {
  createUser,
}
