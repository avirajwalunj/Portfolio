export default function handler(req, res) {
  console.log(req.method);

  if (req.method == "GET") {
    res.status(200).json({ name: "code improve", message: "Success" });
  } else if (req.method == "POST") {
    res.status(200).json({ name: "code inserted", message: "success" });
    console.log(req.body);
    let nodemailer = require("nodemailer");
    console.log("reached");
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.emailId,
        pass: process.env.pass,
      },
      secure: true,
    });

    const mailData = {
      from: req.body.email,
      to: process.env.emailId,
      subject: `Message From Portfolio Website`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Phone: ${req.body.phone}</p><p>Message: ${req.body.message}</p>`,
    };

    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(success);
      }
    });
    res.status(200);
  }
}
