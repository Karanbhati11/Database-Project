const PDFDocument = require("pdfkit");
const fs = require("fs");
const customerModel = require("../models/customerModel");
const purchaseModel = require("../models/purchaseModel");

module.exports = async (req, res) => {
  const {
    card_name,
    card_number,
    cvv,
    card_expiry_month,
    card_expiry_year,
    phonePrice,
    username,
  } = req.body;

  const user = await customerModel.findById(req.session?.userInfo?.userID);
  console.log(user.customerEmail);

  if (user) {
    try {
      const saveData = {
        Device: username,
        Email: user.customerEmail,
        PhonePrice: phonePrice,
        CardNumber: card_number,
      };

      // Save purchase information to database
      const saveInfo = await purchaseModel.create(saveData);

      // Generate PDF
      const doc = new PDFDocument();
      doc
        .fontSize(20)
        .text("Purchase Information", { align: "center" })
        .moveDown();
      doc.fontSize(14).text(`Username: ${username}`);
      doc.fontSize(14).text(`Email: ${user.customerEmail}`);
      doc.fontSize(14).text(`Phone Price: ${phonePrice}`);
      doc.fontSize(14).text(`Card Number: ${card_number}`);
      doc.end();

      // Pipe the PDF document to the response
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        'inline; filename="purchase_info.pdf"'
      );
      doc.pipe(res);
    } catch (err) {
      console.log("something went wrong!", err);
      res.status(500).send("Internal Server Error");
    }
  } else {
    console.log("no user found!!!");
    res.redirect("/");
  }
};
