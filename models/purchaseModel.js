const mongoose = require("mongoose");

const purchaseModel = new mongoose.Schema({
  Device: { type: String },
  Email: { type: String },
  PhonePrice: { type: String },
  CardNumber: { type: String },
});

const customer = mongoose.model("orders", purchaseModel);
module.exports = customer;
