import { Response, NextFunction } from "express";
import { AuthRequest } from "../types/AuthRequest";

export const checkRole = (role: string) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;

    if (userRole && userRole === role) {
      next();
    } else {
      return res.status(403).json({ message: "Access denied" });
    }
  };
};