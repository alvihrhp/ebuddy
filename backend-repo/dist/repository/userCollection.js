"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = exports.updateUser = void 0;
const firebaseConfig_1 = require("../config/firebaseConfig");
const USERS_COLLECTION = "USERS";
const updateUser = async (uid, data) => {
    await firebaseConfig_1.db.collection(USERS_COLLECTION).doc(uid).set(data, { merge: true });
    const doc = await firebaseConfig_1.db.collection(USERS_COLLECTION).doc(uid).get();
    return doc.data();
};
exports.updateUser = updateUser;
const fetchUser = async (uid) => {
    const doc = await firebaseConfig_1.db.collection(USERS_COLLECTION).doc(uid).get();
    return doc.exists ? doc.data() : null;
};
exports.fetchUser = fetchUser;
