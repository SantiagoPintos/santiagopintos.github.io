import { db } from "./firebase";
import { ref, get } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";

export const fetchCvData = async () => {
  const auth = getAuth();
  await signInAnonymously(auth);
  const snapshot = await get(ref(db, "cv"));
  if (!snapshot.exists()) throw new Error("No CV data found");
  return snapshot.val();
};
