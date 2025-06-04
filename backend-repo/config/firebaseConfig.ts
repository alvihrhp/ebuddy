import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    projectId: process.env.FIREBASE_PROJECT_ID, // Sesuaikan dengan emulator
  });

  if (process.env.NODE_ENV === "development") {
    admin.firestore().settings({
      host: "localhost:8080",
      ssl: false,
    });
  }
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };
