const admin = require('../config/firebaseAdminConfig');
const db = admin.firestore();
const LINKSCOLLECTION = 'links';

module.exports = class Link {
  constructor(name) {
    this.name = name;
  }

  async save() {    
    const linksCollection =  Link.getLinkCollection();
    const name = this.name;
    try {
      const linkDoc = await linksCollection.add({name});
      linkDoc.set({id: linkDoc.id}, {merge:true});      
      return true;
    } catch (error) {      
      linkDoc.delete();
      throw 'Error saving new Link';
    }
  }

  static async getLinks() {
    const linksData = [];
    const linksCollection = db.collection(LINKSCOLLECTION);
    const snapshot = await linksCollection.get();

    try {
      snapshot.forEach((doc) => {
			  linksData.push(doc.data());
      });
    } catch (err) {
      console.log('Error getting documents', err);
    }

    let sortedLinks = [];
    if (linksData.length > 0) {
      sortedLinks = linksData;
      sortedLinks.sort((a, b) => a.name.localeCompare(b.name, 'en', { numeric: true }));
    }
    return sortedLinks;
  }

  static getLinkCollection() {
    return db.collection(LINKSCOLLECTION);
  }

  static getLinkDocument(linkId) {
    return db.collection(LINKSCOLLECTION).doc(linkId);
  }
};
