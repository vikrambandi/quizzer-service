"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const admin = require('firebase-admin');

const serviceAccount = require('../../goquizzer_service_account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
exports.default = db;