"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebaseConfig_1 = require("../config/firebaseConfig");
const authMiddleware = async (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split("Bearer ")[1];
    if (!token) {
        res.status(401).json({ error: "No token provided" });
        return;
    }
    try {
        const decoded = await firebaseConfig_1.auth.verifyIdToken(token);
        req.uid = decoded.uid;
        next();
    }
    catch (err) {
        res.status(401).json({ error: "Invalid token" });
    }
};
exports.default = authMiddleware;
