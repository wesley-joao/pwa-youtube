var admin = require("firebase-admin");
var serviceAccount = require("../config/linkmanager-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://linkmanager-12ff1.firebaseio.com"
});

module.exports = admin;