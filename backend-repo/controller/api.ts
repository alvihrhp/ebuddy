// controller/api.ts
import { Request, Response, NextFunction } from "express";
import { updateUser, fetchUser } from "../repository/userCollection";
import { User } from "../entities/user";

interface AuthRequest extends Request {
  user?: { uid: string };
}

export const updateUserData = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const uid = req.user?.uid;
  if (!uid) {
    res.status(401).json({ error: "Unauthorized: No user ID" });
    return;
  }

  const userData = req.body as User;
  if (!userData.uid || !userData.email || !userData.name) {
    res.status(400).json({ error: "Invalid user data" });
  }

  try {
    const updatedUser = await updateUser(uid, userData);
    res.json({ message: "User data updated successfully", user: updatedUser });
  } catch (err: any) {
    res.status(500).json({ error: `Failed to update: ${err.message}` });
  }
};

export const fetchUserData = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const uid = req.user?.uid;
  if (!uid) {
    res.status(401).json({ error: "Unauthorized: No user ID" });
    return;
  }

  try {
    const user = await fetchUser(uid);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err: any) {
    res.status(500).json({ error: `Failed to fetch: ${err.message}` });
  }
};
