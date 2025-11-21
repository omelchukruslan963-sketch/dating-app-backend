import { Request, Response } from "express";
import { createUser } from "../services/auth.service";

export async function registerUser(req: Request, res: Response) {
    try {
        const user = await createUser(req.body);
        return res.json({ success: true, user });
    } catch (e) {
        return res.status(400).json({ success: false, message: "Registration failed", error: e });
    }
}
