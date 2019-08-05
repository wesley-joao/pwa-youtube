const fetch = require('node-fetch');

const sendNotification = (to, link) => {
  const key = 'AAAAOyJtU24:APA91bHyiLQhlhTdaV2MxiUpsJ3gHRN50_gDVRAXk0tKiuF8y7CXN3Oribgwa9aFCI76yokDxS8KaU1OHxRy09V1GCDz13OSxXFMP0k2Fa5dqKoBsXxNN-rrkxXn5Q0UBY-84hOtXWx0';

  const notification = {
    title: 'New link added',
    body: link.name.substr(0, 20),
    icon: 'images/icons/favicon-32x32.png',
    click_action: link.name,
  };

  fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers: {
        Authorization: `key=${key}`,
  	    'Content-Type': 'application/json',
  	},
    body: JSON.stringify({
          notification,
          to,
  	}),
  }).catch((error) => {
	  console.error(error);
  });
};


module.exports = { sendNotification };
