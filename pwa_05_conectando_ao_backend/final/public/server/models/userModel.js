const userHelper = require('../util/user');
const admin = require('../config/firebaseAdminConfig');
const db = admin.firestore();
const moment = require('moment');
const USERSNOTIFICATION = 'usersNotification';

module.exports = class User {
  constructor(token) {
    this.token = token;
  }

  async save() {
    const userCollection = User.getUserCollection();
    const token = this.email;
    const setUserProperties = await userCollection.add({
		  token,
		  date: moment().format(),
    });

  }

  static notifyUsers(newLink) {
    const usersCollection = db.collection(USERSNOTIFICATION);
    usersCollection.get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {			  
			   userHelper.sendNotification(doc.data().notificationToken, newLink);
        });
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  }

  static async subscribeToNotification(notificationToken) {
    const usersNotifyCollection = db.collection(USERSNOTIFICATION);
    await usersNotifyCollection.add({ notificationToken });
  }
};
