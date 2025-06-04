// core/index.ts
import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import userRoutes from "../routes/userRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);

export const api = functions.https.onRequest(app);
