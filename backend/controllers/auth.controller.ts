import { Request, Response, NextFunction } from 'express';
import User, { IUser } from '../models/users.model.js';
import jwt from 'jsonwebtoken';
import { errorMiddleware } from '../middlewares/error.js';

const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET as string, {
    expiresIn: '7d',
  });
};

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ success: false, message: 'Email already exists' });
    }

    const newUser = await User.create({ name, email, password }) as IUser;

    const token = generateToken(newUser._id.toString());

    res.status(201).json({
      success: true,
      message: 'Signup successful',
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email }).select('+password') as IUser;

    if (!foundUser) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const isMatch = await foundUser.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken(foundUser._id.toString());

    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        _id: foundUser._id,
        name: foundUser.name,
        email: foundUser.email,
      },
      token,
    });
  } 
  catch (error) {
    next(error);
  }
};