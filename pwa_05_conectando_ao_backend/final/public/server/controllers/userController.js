const User = require('../models/userModel');

exports.subscribeToNotification = async (req, res) => {  
  const notificationToken = req.body.notificationToken;

  try{
    await User.subscribeToNotification(userEmail, notificationToken);
    res.status(201).json({message:"user subscribed!"})
  }catch(error){
    res.status(500).json({message:'Error subscribing user to notification'})
  }
};
