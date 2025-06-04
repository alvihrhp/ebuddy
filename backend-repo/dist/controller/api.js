"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserData = exports.updateUserData = void 0;
const userCollection_1 = require("../repository/userCollection");
const updateUserData = async (req, res, next) => {
    var _a;
    const uid = (_a = req.user) === null || _a === void 0 ? void 0 : _a.uid;
    if (!uid) {
        res.status(401).json({ error: "Unauthorized: No user ID" });
        return;
    }
    const userData = req.body;
    if (!userData.uid || !userData.email || !userData.name) {
        res.status(400).json({ error: "Invalid user data" });
    }
    try {
        const updatedUser = await (0, userCollection_1.updateUser)(uid, userData);
        res.json({ message: "User data updated successfully", user: updatedUser });
    }
    catch (err) {
        res.status(500).json({ error: `Failed to update: ${err.message}` });
    }
};
exports.updateUserData = updateUserData;
const fetchUserData = async (req, res, next) => {
    var _a;
    const uid = (_a = req.user) === null || _a === void 0 ? void 0 : _a.uid;
    if (!uid) {
        res.status(401).json({ error: "Unauthorized: No user ID" });
        return;
    }
    try {
        const user = await (0, userCollection_1.fetchUser)(uid);
        if (!user) {
            res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    }
    catch (err) {
        res.status(500).json({ error: `Failed to fetch: ${err.message}` });
    }
};
exports.fetchUserData = fetchUserData;
