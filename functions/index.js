const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rishiraamns@gmail.com",
    pass: "niet tsae siiu jyct",
  },
});
exports.submitform = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    if (req.method === "POST") {
      try {
        console.log(req.body);
        let data = JSON.stringify(req.body);
        data = data.replace(/"/g, "");
        data = data.replace("[", "");
        data = data.replace("{", "");
        data = data.replace("{", "");
        data = data.replace("]", "");
        data = data.replace("}", "");
        data = data.replace("}", "");
        data = data.replace(",", "");
        data = data.replace(/\\r/g, "");
        const mailOptions = {
          from: "rishiraamns@gmail.com",
          to: "tamizhselvangt@gmail.com",
          subject: "New Form Submission",
          text: data,
        };
        await transporter.sendMail(mailOptions);
        res.set("Cache-Control", "public, max-age=300, s-maxage=600");
        res.status(200).send("Email sent");
      } catch (e) {
        res.send(e);
      }
    } else {
      res.send("Not a POST request");
    }
  });
});
