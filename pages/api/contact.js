

export default function (req, res) {

    require('dotenv').config()
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'neucristtest@gmail.com',
            pass: process.env.password,
        },
        secure: true,
    })
    const mailData = {
        from: 'neucristtest@gmail.com',
        to: 'ventas@neucrist.com',
        subject: `Message From ${req.body.fullname}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })
    
    res.status(200)
    res.send('success')
}
