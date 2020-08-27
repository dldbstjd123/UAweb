var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var config = require('../../ignore/config.js')


/* GET users listing. */
router.post('/send', function(req, res, next) {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: config.emailConfig
	});

      mailOptions = {
        from: 'lys941121@gmail.com',
        to: 'lys941121@gmail.com',
        bcc: 'dannydannyl@me.com',
        subject: 'yo0on.com contact email',
        replyTo: req.body.email,
        html: `<h1> ${req.body.name} has sent you a message</h1><p>Message: ${req.body.message}</p>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
            res.json({ status: 'failed' })
        } else {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Controll-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.json({ status: 'succeed' });
        }
    })


	res.json({status: 1, message: 'User API working'});
});

module.exports = router;
