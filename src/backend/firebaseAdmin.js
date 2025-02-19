const admin = require('firebase-admin');

// Initialize using default credentials (or configure via environment variables)
admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

module.exports = admin;
