import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "luangabrieldsilva05@gmail.com",
    pass: "cedi fhnx lrln wnth",
  },
});

export default transporter;