const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  try {
    let transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: 'noreply.stationwatch@gmail.com', 
        pass: 'whklovxnaoivwefz', 
      },
    });

    let info = await transporter.sendMail({
      from: 'oreply.stationwatch@gmail.com', // Gönderen e-posta adresi
      to,
      subject, 
      text, 

    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
