const {sendMail} = require('./src/send-mail');

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
console.log("Apllication Started")
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('https://hermes.bboxsports.com/api/contact/save', function (req, res) {
  console.log(req.body);
  sendMail(req.body);
  return res.json({message: 'Success'});
 });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);