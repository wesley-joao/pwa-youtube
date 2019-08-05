const User = require('../models/userModel');
const Link = require('../models/linkModel');

exports.getLinks = async (req, res) => {
  try{
    const links = await Link.getLinks();
    res.status(200).json(links);

  }catch(error){
    console.log(error);
    res.status(500).json({message:'Error getting links '});
  }
};

exports.createLink = async (req, res) => {
  const { linkName } = req.body;  

  const newLink = new Link(linkName);

  try{
    await newLink.save();
    newLink.indexDbId = req.body.indexDbId;
    res.status(201).send(newLink);
  }catch(error){    
    res.status(500).json({message:'error creating link'});
  }

  //User.notifyUsers(newLink);
};

exports.deleteLink = async (req, res) => {
  const linkToDeleteId = req.params.linkId;  

  const docLink = Link.getLinkDocument(linkToDeleteId);

  try {
    await docLink.delete();
    res.status(200).json({message:"Link deleted!"});
  } catch (err) {    
    res.status(500).json({message:"Error deleting link!"});
    console.error('Error removing document: ', error);
  }
};
