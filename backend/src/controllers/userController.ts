import type { NextFunction, Response } from "express";
import type { AuthRequest } from "../middleware/auth";
import { User } from "../models/User";

export async function getUsers(req:AuthRequest,res:Response,Next:NextFunction) {
    try {
        
        const {userId} = req;

        const users = User.find({_id:{$ne:userId}}).select("name email avatar").limit(50)

        res.json(users)

    } catch (error) {
        res.status(500)
        Next(error)
    }
}