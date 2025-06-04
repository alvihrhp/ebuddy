import { Request, Response, NextFunction } from "express";
import { updateUser, fetchUser } from "../repository/userCollection";

interface AuthRequest extends Request {
  user?: { uid: string };
}

export const updateUserData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const uid = (req as any).uid;
  try {
    await updateUser(uid, req.body);
    res.json({ message: "User data updated" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update" });
  }
};

export const fetchUserData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const uid = (req as any).uid;
  try {
    const user = await fetchUser(uid);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch" });
  }
};
