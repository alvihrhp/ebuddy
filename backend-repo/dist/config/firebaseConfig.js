"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.db = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
if (!firebase_admin_1.default.apps.length) {
    firebase_admin_1.default.initializeApp({
        projectId: process.env.FIREBASE_PROJECT_ID, // Sesuaikan dengan emulator
    });
    if (process.env.NODE_ENV === "development") {
        firebase_admin_1.default.firestore().settings({
            host: "localhost:8080",
            ssl: false,
        });
    }
}
const db = firebase_admin_1.default.firestore();
exports.db = db;
const auth = firebase_admin_1.default.auth();
exports.auth = auth;
