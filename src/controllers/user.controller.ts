import { NextFunction, Request, Response } from "express";

class UserController {
    store ( request: Request, response: Response, next: NextFunction) {
        const {name, email, password} = request.body;
        


        try {
            return response.status(201).json({ ok: true })
        
        } catch (error) {
            next(error)
        }
    }
}

export { UserController }