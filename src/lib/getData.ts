import { db } from "./firebase";
import { ref, get } from "firebase/database";

export const fetchCvData = async () => {
  const snapshot = await get(ref(db, "cv"));
  if (!snapshot.exists()) throw new Error("No CV data found");
  return snapshot.val();
};
