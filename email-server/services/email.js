const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'test81139@gmail.com',
    pass: 'Pu830621'
  }
});

module.exports = {
  sendPhishingEmail: async (to, text) => {
    const mailOptions = {
      from: 'test81139@gmail.com',
      to,
      subject: 'Phishing email',
      text
    };

    return await transporter
      .sendMail(mailOptions)      
  }
}