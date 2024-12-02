import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-server",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: "mail",
    pass: "password",
  },
});

// verify connection configuration

export function verifyEmailConfig() {
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
}
