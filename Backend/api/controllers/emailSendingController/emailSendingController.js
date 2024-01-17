const nodemailer = require('nodemailer');

const sendEmail = async(receiverEmail, subject, bodyText) => {
    return new Promise(
        async(resolve, reject) => {
            console.log(process.env.USER_EMAIL, process.env.USER_EMAIL_PASS);
            try{
                // Create a nodemailer transporter
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                    user: process.env.USER_EMAIL,
                    pass: process.env.USER_EMAIL_PASS,
                    },
                });
                
                // Define email options
                const mailOptions = {
                    from: process.env.USER_EMAIL,
                    to: receiverEmail,
                    subject: subject,
                    text: bodyText,
                };
                
                // Send the email
                transporter.sendMail(mailOptions, (err, info)=>{
                    console.log(info);
                });
                resolve();
                return;
            } catch{
                reject();
                return;
            }
        }
    )
};

module.exports = {
    sendEmail,

}