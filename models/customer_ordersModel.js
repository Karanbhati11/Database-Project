const mongoose = require("mongoose");

const customerOrders = new mongoose.Schema({
  orderId: { type: String },
  customerId: { type: String },
  date: { type: Date },
  total: { type: Number },
});

const customer = mongoose.model("customerOrders", customerOrders);
module.exports = customer;
