var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var config = require('../../ignore/config.js')


/* GET users listing. */
router.post('/send', function(req, res, next) {
    console.log('----emial----')
    console.log(req.body)
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: config.emailConfig
	});

    mailOptions = {
        from: 'lys941121@gmail.com',
        to: 'lys941121@gmail.com',
        bcc: 'dannydannyl@me.com',
        subject: '웹사이트 문의 메일',
        replyTo: req.body.email,
        html: `<h1> 이름: ${req.body.name}</h1><h1>이메일: ${req.body.email}</h1><p>메세지: ${req.body.message}</p>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
            res.json({ status: 0, message: 'User API not working' })
        } else {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Controll-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.json({ status: 1, message: 'User API working' });
        }
    })


	res.json({status: 1, message: 'User API working'});
});

module.exports = router;
