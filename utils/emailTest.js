import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: "907785012@qq.com",
    pass: "wavqccnvprokbfbh",
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
