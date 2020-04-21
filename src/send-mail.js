require('dotenv').config();

let nodemailer = require('nodemailer');
let aws = require('aws-sdk');

// configure AWS SDK
aws.config.update({
  accessKeyId: process.env.SES_ACCESS_KEY_ID, 
  secretAccessKey: process.env.SES_SECRET_ACCESS_KEY, 
  region: process.env.SES_REGION
});

// create Nodemailer SES transporter
let transporter = nodemailer.createTransport({
    SES: new aws.SES({
        apiVersion: '2010-12-01'
    })
});

// send some mail
const sendMail = (body) => {
  transporter.sendMail({
      from: 'no-reply@bboxsports.com',
      to: 'pedro.c@bboxsports.com',
      replyTo: body.email,
      subject: 'Message from' + body.name + '(' + body.email + ')',
      text: body.message,

  }, (err, info) => {
      console.log(info);
      console.log(err);
  });
} 

module.exports={sendMail};