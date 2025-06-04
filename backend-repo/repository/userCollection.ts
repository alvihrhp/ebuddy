import { db } from "../config/firebaseConfig";
import { User } from "../entities/user";

const USERS_COLLECTION = "USERS";

export const updateUser = async (uid: string, data: Partial<User>) => {
  await db.collection(USERS_COLLECTION).doc(uid).set(data, { merge: true });
};

export const fetchUser = async (uid: string): Promise<User | null> => {
  const doc = await db.collection(USERS_COLLECTION).doc(uid).get();
  return doc.exists ? (doc.data() as User) : null;
};
