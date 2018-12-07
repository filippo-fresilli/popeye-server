const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.gmail_email,
    pass: process.env.gmail_password,
  },
});
// setup for confirmation email:
function sendSignupMail(name, email){
  return transport.sendMail({
  from:"Christmas Generator <northpoleworkshopelves@gmail.com>",
  to:`${name} <${email}>`,
  subject:`Hello ${name}, welcome to Popeye platform!`,
  text:"You succefully signed up.",
  html:"You succefully signed up.",
});
}

module.exports = { sendSignupMail }