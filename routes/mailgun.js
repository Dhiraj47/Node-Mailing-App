const express = require ('express');
const router = express.Router();

router.post('/mailgun', (req, res) =>{
	//edit domain name and api key which you get from mailgun.com
    const domain = "{your doamin}";
    const api_key = "{your api key}";

    const rec_email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

    const data = {
    from: 'Dhiraj <dxk.r47@gmail.com>',
    to: rec_email,
    subject: subject,
    text: message
    };

    mailgun.messages().send(data, function (error, body) {
        if(error)
        console.log(error.message);
        if(body)
        console.log(body);
    });
    res.redirect('/');
});

module.exports = router;















